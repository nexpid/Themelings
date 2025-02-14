// app/utils/MFAUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    _fun92812: for(var _fun92812_ip = 0; ; ) switch(_fun92812_ip) {
 0:
        options = argBar;
        zulu = argFred;
        verify = argPlugh;
        entity = argBaz;
        var _closure1_slot0 = entity;
        var _closure1_slot1 = verify;
        tango = function(argFoo) { // Original name: encodeTotpSecret
            tango = argFoo;
            zulu = tango.replace;
            mike = /[\s._-]+/g;
            entity = '';
            mike = zulu.bind(tango)(mike, entity);
            entity = mike.toUpperCase;
            entity = entity.bind(mike)();
            return entity;
        };
        var _closure1_slot3 = tango;
        report = global;
        offset = report.Object;
        golf = offset.defineProperty;
        oscar = {};
        entity = true;
        oscar['value'] = entity;
        entity = '__esModule';
        entity = golf.bind(offset)(zulu, entity, oscar);
        oscar = report.window;
        golf = null;
        offset = golf == oscar;
        entity = undefined;
        yankee = undefined;
        if(offset) { _fun92812_ip = 90; continue _fun92812 }
 84:
        yankee = oscar.crypto;
 90:
        if(!(golf == yankee)) { _fun92812_ip = 118; continue _fun92812 }
 94:
        offset = report.window;
        romeo = golf == offset;
        oscar = undefined;
        if(romeo) { _fun92812_ip = 115; continue _fun92812 }
 109:
        oscar = offset.msCrypto;
 115:
        yankee = oscar;
 118:
        var _closure1_slot2 = yankee;
        oscar = report.window;
        report = 'Uint8Array';
        report = report in oscar;
        oscar = golf != yankee;
        if(!oscar) { _fun92812_ip = 151; continue _fun92812 }
 143:
        offset = 'getRandomValues';
        oscar = offset in yankee;
 151:
        if(!oscar) { _fun92812_ip = 157; continue _fun92812 }
 154:
        oscar = report;
 157:
        report = 0;
        report = verify[report];
        report = options.bind(entity)(report);
        report = report.NativeModules;
        report = report.DCDSecurityKeyManager;
        report = golf != report;
        golf = 2;
        golf = verify[golf];
        verify = options.bind(entity)(golf);
        options = verify.fileFinishedImporting;
        golf = 'utils/MFAUtils.tsx';
        golf = options.bind(verify)(golf);
        zulu['hasCrypto'] = oscar;
        zulu['hasWebAuthn'] = report;
        report = function() { // Original name: generateTotpSecret
            tango = _closure1_slot2;
            zulu = tango.getRandomValues;
            mike = global;
            oscar = mike.Uint8Array;
            mike = oscar.prototype;
            report = Object.create(mike, {constructor: {value: oscar}});
            options = 20;
            verify = report;
            mike = new verify[oscar](options, golf);
            mike = mike instanceof Object ? mike : report;
            zulu = zulu.bind(tango)(mike);
            tango = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 1;
            mike = mike[entity];
            entity = undefined;
            mike = tango.bind(entity)(mike);
            entity = mike.encode;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.toString;
            entity = 'utf8';
            tango = mike.bind(zulu)(entity);
            zulu = tango.replace;
            mike = /=/g;
            entity = '';
            mike = zulu.bind(tango)(mike, entity);
            entity = mike.toLowerCase;
            tango = entity.bind(mike)();
            zulu = tango.replace;
            mike = /(\w{4})/g;
            entity = '$1 ';
            mike = zulu.bind(tango)(mike, entity);
            entity = mike.trim;
            entity = entity.bind(mike)();
            return entity;
        };
        zulu['generateTotpSecret'] = report;
        zulu['encodeTotpSecret'] = tango;
        mike = function(argFoo, argBar) { // Original name: encodeTotpSecretAsUrl
            _fun92815: for(var _fun92815_ip = 0; ; ) switch(_fun92815_ip) {
 0:
                tango = arguments[2];
                zulu = undefined;
                if(!(tango === zulu)) { _fun92815_ip = 15; continue _fun92815 }
 9:
                tango = 'Discord';
 15:
                entity = global;
                mike = entity.encodeURI;
                verify = mike.bind(zulu)(tango);
                report = entity.encodeURI;
                mike = argFoo;
                backup = report.bind(zulu)(mike);
                report = _closure1_slot3;
                mike = argBar;
                romeo = report.bind(zulu)(mike);
                mike = entity.encodeURIComponent;
                offset = mike.bind(zulu)(tango);
                entity = entity.HermesInternal;
                report = entity.concat;
                output = 'otpauth://totp/';
                kilo = ':';
                foxtrot = '?secret=';
                yankee = '&issuer=';
                sizing = verify;
                entity = output[report](sizing, kilo, backup, foxtrot, romeo, yankee, offset, verify);
                return entity;
            }
        };
        zulu['encodeTotpSecretAsUrl'] = mike;
        return entity;
    }
})();