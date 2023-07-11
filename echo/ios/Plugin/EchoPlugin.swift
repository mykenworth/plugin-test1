import Foundation
import Capacitor

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
    
}
