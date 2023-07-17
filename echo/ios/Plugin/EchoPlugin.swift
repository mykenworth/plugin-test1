import Foundation
import Capacitor
import Alamofire

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */

public struct TestStruct: Codable {
    var lat: Int;
    var long: Int;
}

public class TestClass: NSObject, Codable {
    var lat: Int;
    var long: Int;
    
    init(lat: Int, long: Int) {
        self.lat = lat
        self.long = long
    }
}

@objc(EchoPlugin)
public class EchoPlugin: CAPPlugin {
    private let implementation = Echo()
    
    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve([
            "value": implementation.echo(value)
        ])
    }
    
    @objc func openMap(_ call: CAPPluginCall) {
        do {
            guard let opt = call.options, let latitude = call.getInt("latitude"), let longitude = call.getInt("longitude")  else {
                return
            }
            
            let testStruct = TestStruct(lat: latitude, long: longitude)
            // using struct
            let jsonStringStruct = implementation.openSomethingStruct(testStruct)
            
            // using class
            let jsonStringClass = implementation.openSomethingStruct(testStruct)
            
            call.resolve(["valueStruct": jsonStringStruct, "valueClass": jsonStringClass])
        } catch { print(error) }
    }
    
    @objc func getForceUpgrade(_ call: CAPPluginCall) {
        do {
            let urlStringSunlife = "http://uat-services.ca.sunlife/enterprise-slf-mobile-poc/release-config"
            
            let headers: HTTPHeaders = [
                "App-Id": "com.sunlife.mobile.member",
                "App-Version": "4.3.0",
                "OS-Platform": "ios",
                "OS-Version": "12.2"
            ]
            
            AF.request(urlStringSunlife, headers: headers).responseJSON { response in
                debugPrint(response.result)
                switch response.result {
                case .success:
                    guard let items = response.value else {
                        return
                    }
        
                    call.resolve(["results": items])
                case .failure:
                    call.resolve(["results": ""])
                }
            }
            
        } catch { print(error) }
    }
}
