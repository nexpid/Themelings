// app/utils/MFAUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        option = argBar;
        zuuluu = argFre;
        verify = argPlu;
        entity = argBaz;
        var _closure1_slot0 = entity;
        var _closure1_slot1 = verify;
        tangon = function(argFoo) { // Original name: encodeTotpSecret
            tangon = argFoo;
            zuuluu = tangon.replace;
            michal = /[\s._-]+/g;
            entity = '';
            michal = zuuluu.bind(tangon)(michal, entity);
            entity = michal.toUpperCase;
            entity = entity.bind(michal)();
            return entity;
        };
        var _closure1_slot3 = tangon;
        report = global;
        offset = report.Object;
        golfie = offset.defineProperty;
        oscard = {};
        entity = true;
        oscard['value'] = entity;
        entity = '__esModule';
        entity = golfie.bind(offset)(zuuluu, entity, oscard);
        oscard = report.window;
        golfie = null;
        offset = golfie == oscard;
        entity = undefined;
        yankee = undefined;
        if(offset) { _fun00002_ip = 90; continue _fun00001 }
 84:
        yankee = oscard.crypto;
 90:
        if(!(golfie == yankee)) { _fun00002_ip = 118; continue _fun00001 }
 94:
        offset = report.window;
        romeon = golfie == offset;
        oscard = undefined;
        if(romeon) { _fun00002_ip = 115; continue _fun00001 }
 109:
        oscard = offset.msCrypto;
 115:
        yankee = oscard;
 118:
        var _closure1_slot2 = yankee;
        oscard = report.window;
        report = 'Uint8Array';
        report = report in oscard;
        oscard = golfie != yankee;
        if(!oscard) { _fun00002_ip = 151; continue _fun00001 }
 143:
        offset = 'getRandomValues';
        oscard = offset in yankee;
 151:
        if(!oscard) { _fun00002_ip = 157; continue _fun00001 }
 154:
        oscard = report;
 157:
        report = 0;
        report = verify[report];
        report = option.bind(entity)(report);
        report = report.NativeModules;
        report = report.DCDSecurityKeyManager;
        report = golfie != report;
        golfie = 2;
        golfie = verify[golfie];
        verify = option.bind(entity)(golfie);
        option = verify.fileFinishedImporting;
        golfie = 'utils/MFAUtils.tsx';
        golfie = option.bind(verify)(golfie);
        zuuluu['hasCrypto'] = oscard;
        zuuluu['hasWebAuthn'] = report;
        report = function() { // Original name: generateTotpSecret
            tangon = _closure1_slot2;
            zuuluu = tangon.getRandomValues;
            michal = global;
            oscard = michal.Uint8Array;
            michal = oscard.prototype;
            report = Object.create(michal, {constructor: {value: oscard}});
            option = 20;
            verify = report;
            michal = new verify[oscard](option, golfie);
            michal = michal instanceof Object ? michal : report;
            zuuluu = zuuluu.bind(tangon)(michal);
            tangon = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 1;
            michal = michal[entity];
            entity = undefined;
            michal = tangon.bind(entity)(michal);
            entity = michal.encode;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.toString;
            entity = 'utf8';
            tangon = michal.bind(zuuluu)(entity);
            zuuluu = tangon.replace;
            michal = /=/g;
            entity = '';
            michal = zuuluu.bind(tangon)(michal, entity);
            entity = michal.toLowerCase;
            tangon = entity.bind(michal)();
            zuuluu = tangon.replace;
            michal = /(\w{4})/g;
            entity = '$1 ';
            michal = zuuluu.bind(tangon)(michal, entity);
            entity = michal.trim;
            entity = entity.bind(michal)();
            return entity;
        };
        zuuluu['generateTotpSecret'] = report;
        zuuluu['encodeTotpSecret'] = tangon;
        michal = function(argFoo, argBar) { // Original name: encodeTotpSecretAsUrl
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tangon = arguments[2];
                zuuluu = undefined;
                if(!(tangon === zuuluu)) { _fun00004_ip = 15; continue _fun00003 }
 9:
                tangon = 'Discord';
 15:
                entity = global;
                michal = entity.encodeURI;
                verify = michal.bind(zuuluu)(tangon);
                report = entity.encodeURI;
                michal = argFoo;
                backup = report.bind(zuuluu)(michal);
                report = _closure1_slot3;
                michal = argBar;
                romeon = report.bind(zuuluu)(michal);
                michal = entity.encodeURIComponent;
                offset = michal.bind(zuuluu)(tangon);
                entity = entity.HermesInternal;
                report = entity.concat;
                output = 'otpauth://totp/';
                kiloes = ':';
                foxtra = '?secret=';
                yankee = '&issuer=';
                sizing = verify;
                entity = output[report](sizing, kiloes, backup, foxtra, romeon, yankee, offset, verify);
                return entity;
            }
        };
        zuuluu['encodeTotpSecretAsUrl'] = michal;
        return entity;
    }
})();