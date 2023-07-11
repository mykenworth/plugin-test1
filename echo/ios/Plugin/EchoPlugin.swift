import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */

struct TestStruct: Codable {
    var lat: Int;
    var long: Int;
}


@objc(EchoPlugin)
public class EchoPlugin: CAPPlugin {
    private let implementation = Echo()

    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
         print("KEN from Swift2 => value: \(value)")
        call.resolve([
            "value": implementation.echo(value)
        ])
    }

    @objc func openMap(_ call: CAPPluginCall) {
        do {
            
            print("========== openMap fired ==========")
            guard let opt = call.options, let latitude = call.getInt("latitude"), let longitude = call.getInt("longitude")  else {
                return
            }
            print("opt: \(opt)")
            
            let testStruct = TestStruct(lat: latitude, long: longitude)
            
            let jsonData = try JSONEncoder().encode(testStruct)
            let jsonString = String(data: jsonData, encoding: .utf8)!
            print(jsonString) // [{"sentence":"Hello world","lang":"en"},{"sentence":"Hallo Welt","lang":"de"}]
            call.resolve(["openMapValue": jsonString])
        } catch { print(error) }
    }
    
}
