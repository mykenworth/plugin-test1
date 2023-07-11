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
            // guard let opt = call.options, let latitude = call.getInt("latitude"), let longitude = call.getInt("longitude")  else {
            //     return
            // }
            
            // let testStruct = TestStruct(lat: latitude, long: longitude)
            // // using struct
            // let jsonStringStruct = implementation.openSomethingStruct(testStruct)
            
            // // using class
            // let jsonStringClass = implementation.openSomethingStruct(testStruct)
            
            // call.resolve(["valueStruct": jsonStringStruct, "valueClass": jsonStringClass])



// start

// let value = call.getString("filter") ?? ""
//         // You could filter based on the value passed to the function!

//         let contactStore = CNContactStore()
//         var contacts = [Any]()
//         let keys = [
//                 CNContactFormatter.descriptorForRequiredKeys(for: .fullName),
//                         CNContactPhoneNumbersKey,
//                         CNContactEmailAddressesKey
//                 ] as [Any]
//         let request = CNContactFetchRequest(keysToFetch: keys as! [CNKeyDescriptor])

//         contactStore.requestAccess(for: .contacts) { (granted, error) in
//             if let error = error {
//                 print("failed to request access", error)
//                 call.reject("access denied")
//                 return
//             }
//             if granted {
//                do {
//                    try contactStore.enumerateContacts(with: request){
//                            (contact, stop) in
//                     contacts.append([
//                         "firstName": contact.givenName,
//                         "lastName": contact.familyName,
//                         "telephone": contact.phoneNumbers.first?.value.stringValue ?? ""
//                     ])
//                    }
//                    print(contacts)
//                    call.success([
//                        "results": contacts
//                    ])
//                } catch {
//                    print("unable to fetch contacts")
//                    call.reject("Unable to fetch contacts")
//                }
//             } else {
//                 print("access denied")
//                 call.reject("access denied")
//             }
//         }

// end
            





        } catch { print(error) }
    }
    
}
