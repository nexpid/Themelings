// discord_common/js/shared/lib/TokenManager.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        option = argBar;
        zuuluu = argFre;
        verify = argPlu;
        var _closure1_slot0 = option;
        var _closure1_slot1 = verify;
        entity = function(argFoo) { // Original name: fromEntries
            tangon = new Array(0);
            oscard = argFoo;
            report = 0;
            golfie = tangon;
            entity = arraySpread(golfie, oscard, report);
            zuuluu = tangon.reduce;
            michal = function(argFoo, argBar) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = argFoo;
                    oscard = argBar;
                    tangon = oscard[Symbol.iterator];
                    oscard = tangon().next;
                    michal = oscard().value;
                    zuuluu = tangon;
                    option = undefined;
                    report = zuuluu === option;
                    zuuluu = undefined;
                    if(report) { _fun00004_ip = 30; continue _fun00003 }
 27:
                    zuuluu = michal;
 30:
                    michal = undefined;
                    if(report) { _fun00004_ip = 60; continue _fun00003 }
 35:
                    golfie = oscard().value;
                    oscard = tangon;
                    oscard = oscard === option;
                    michal = undefined;
                    report = oscard;
                    if(oscard) { _fun00004_ip = 60; continue _fun00003 }
 54:
                    michal = golfie;
                    report = oscard;
 60:
                    if(report) { _fun00004_ip = 66; continue _fun00003 }
 63:
                    tangon.return();
 66:
                    entity[zuuluu] = michal;
                    return entity;
                }
            };
            entity = {};
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        var _closure1_slot13 = entity;
        entity = function() { // Original name: storeTokens
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                michal = _closure1_slot11;
                if(michal) { _fun00006_ip = 164; continue _fun00005 }
 13:
                zuuluu = _closure1_slot7;
                michal = null;
                if(!(michal == zuuluu)) { _fun00006_ip = 68; continue _fun00005 }
 23:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot1;
                michal = 1;
                zuuluu = zuuluu[michal];
                michal = undefined;
                michal = tangon.bind(michal)(zuuluu);
                tangon = michal.Storage;
                zuuluu = tangon.remove;
                michal = _closure1_slot3;
                michal = zuuluu.bind(tangon)(michal);
                _fun00006_ip = 115; continue _fun00005;
 68:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot1;
                michal = 1;
                zuuluu = zuuluu[michal];
                michal = undefined;
                michal = tangon.bind(michal)(zuuluu);
                report = michal.Storage;
                tangon = report.set;
                zuuluu = _closure1_slot3;
                michal = _closure1_slot7;
                michal = tangon.bind(report)(zuuluu, michal);
 115:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot1;
                michal = 1;
                zuuluu = zuuluu[michal];
                michal = undefined;
                zuuluu = tangon.bind(michal)(zuuluu);
                oscard = zuuluu.Storage;
                report = oscard.set;
                tangon = _closure1_slot2;
                zuuluu = _closure1_slot10;
                zuuluu = report.bind(oscard)(tangon, zuuluu);
                return michal;
 164:
                tangon = _closure1_slot0;
                report = _closure1_slot1;
                michal = 1;
                oscard = report[michal];
                zuuluu = undefined;
                oscard = tangon.bind(zuuluu)(oscard);
                option = oscard.Storage;
                golfie = option.remove;
                oscard = _closure1_slot3;
                oscard = golfie.bind(option)(oscard);
                michal = report[michal];
                michal = tangon.bind(zuuluu)(michal);
                zuuluu = michal.Storage;
                michal = zuuluu.remove;
                entity = _closure1_slot2;
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            }
        };
        var _closure1_slot14 = entity;
        entity = function(argFoo) { // Original name: maybeDecryptToken
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                golfie = argFoo;
                entity = null;
                if(!(entity != golfie)) { _fun00008_ip = 126; continue _fun00007 }
 9:
                zuuluu = golfie.length;
                michal = 0;
                if(!(michal !== zuuluu)) { _fun00008_ip = 126; continue _fun00007 }
 20:
                michal = _closure1_slot5;
                if(!(entity != michal)) { _fun00008_ip = 62; continue _fun00007 }
 31:
                entity = michal.isEncryptionAvailable;
                entity = entity.bind(michal)();
                if(!entity) { _fun00008_ip = 62; continue _fun00007 }
 44:
                michal = golfie.startsWith;
                entity = _closure1_slot4;
                entity = michal.bind(golfie)(entity);
                if(entity) { _fun00008_ip = 78; continue _fun00007 }
 62:
                entity = {};
                entity['decryptedToken'] = golfie;
                michal = false;
                entity['wasEncrypted'] = michal;
                _fun00008_ip = 124; continue _fun00007;
 78:
                michal = {};
                report = _closure1_slot5;
                tangon = report.decryptString;
                oscard = golfie.substring;
                zuuluu = 12;
                zuuluu = oscard.bind(golfie)(zuuluu);
                zuuluu = tangon.bind(report)(zuuluu);
                michal['decryptedToken'] = zuuluu;
                zuuluu = true;
                michal['wasEncrypted'] = zuuluu;
                entity = michal;
 124:
                _fun00008_ip = 136; continue _fun00007;
 126:
                entity = {'decryptedToken': null, 'wasEncrypted': false};
 136:
                return entity;
            }
        };
        var _closure1_slot15 = entity;
        entity = function(argFoo) { // Original name: maybeEncryptToken
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                tangon = argFoo;
                report = _closure1_slot5;
                zuuluu = null;
                entity = tangon;
                if(!(zuuluu != report)) { _fun00010_ip = 98; continue _fun00009 }
 19:
                zuuluu = report.isEncryptionAvailable;
                zuuluu = zuuluu.bind(report)();
                entity = tangon;
                if(!zuuluu) { _fun00010_ip = 98; continue _fun00009 }
 35:
                report = tangon.startsWith;
                zuuluu = _closure1_slot4;
                zuuluu = report.bind(tangon)(zuuluu);
                entity = tangon;
                if(zuuluu) { _fun00010_ip = 98; continue _fun00009 }
 56:
                report = _closure1_slot4;
                zuuluu = _closure1_slot5;
                michal = zuuluu.encryptString;
                tangon = michal.bind(zuuluu)(tangon);
                michal = global;
                michal = michal.HermesInternal;
                zuuluu = michal.concat;
                michal = '';
                entity = zuuluu.bind(michal)(report, tangon);
 98:
                return entity;
            }
        };
        var _closure1_slot16 = entity;
        oscard = function(argFoo) { // Original name: getToken
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                zuuluu = argFoo;
                entity = null;
                if(!(entity == zuuluu)) { _fun00012_ip = 18; continue _fun00011 }
 9:
                entity = _closure1_slot6;
                _fun00012_ip = 29; continue _fun00011;
 18:
                michal = _closure1_slot9;
                entity = michal[zuuluu];
 29:
                return entity;
            }
        };
        var _closure1_slot17 = oscard;
        entity = function(argFoo, argBar) { // Original name: setSecondaryToken
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                zuuluu = argBar;
                entity = null;
                if(!(entity != zuuluu)) { _fun00014_ip = 23; continue _fun00013 }
 9:
                michal = _closure1_slot9;
                entity = argFoo;
                michal[zuuluu] = entity;
 23:
                michal = _closure1_slot8;
                if(michal) { _fun00014_ip = 61; continue _fun00013 }
 33:
                michal = _closure1_slot6;
                var _closure1_slot7 = michal;
                michal = _closure1_slot9;
                _closure1_slot10 = michal;
                zuuluu = _closure1_slot14;
                michal = undefined;
                michal = zuuluu.bind(michal)();
                _fun00014_ip = 71; continue _fun00013;
 61:
                michal = _closure1_slot20;
                entity = undefined;
                entity = michal.bind(entity)();
 71:
                entity = undefined;
                return entity;
            }
        };
        var _closure1_slot18 = entity;
        report = function(argFoo) { // Original name: removeToken
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                oscard = argFoo;
                michal = _closure1_slot6;
                entity = null;
                if(!(entity != oscard)) { _fun00016_ip = 40; continue _fun00015 }
 16:
                tangon = _closure1_slot9;
                michal = tangon[oscard];
                report = _closure1_slot9;
                report = delete report[oscard];
                report = _closure1_slot10;
                report = delete report[oscard];
 40:
                tangon = _closure1_slot6;
                if(!(michal === tangon)) { _fun00016_ip = 56; continue _fun00015 }
 48:
                var _closure1_slot6 = entity;
                _closure1_slot7 = entity;
 56:
                tangon = _closure1_slot14;
                zuuluu = undefined;
                zuuluu = tangon.bind(zuuluu)();
                entity = entity != michal;
                return entity;
            }
        };
        var _closure1_slot19 = report;
        michal = function() { // Original name: encryptAndStoreTokens
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                tangon = _closure1_slot5;
                zuuluu = null;
                if(!(zuuluu != tangon)) { _fun00018_ip = 26; continue _fun00017 }
 13:
                michal = tangon.isEncryptionAvailable;
                michal = michal.bind(tangon)();
                if(michal) { _fun00018_ip = 44; continue _fun00017 }
 26:
                michal = _closure1_slot6;
                _closure1_slot7 = michal;
                michal = _closure1_slot9;
                _closure1_slot10 = michal;
                _fun00018_ip = 132; continue _fun00017;
 44:
                michal = _closure1_slot6;
                if(!(zuuluu != michal)) { _fun00018_ip = 71; continue _fun00017 }
 52:
                tangon = _closure1_slot16;
                zuuluu = _closure1_slot6;
                michal = undefined;
                michal = tangon.bind(michal)(zuuluu);
                _closure1_slot7 = michal;
 71:
                tangon = _closure1_slot13;
                michal = global;
                report = michal.Object;
                zuuluu = report.entries;
                michal = _closure1_slot9;
                report = zuuluu.bind(report)(michal);
                zuuluu = report.map;
                michal = function(argFoo) {
                    _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                        oscard = argFoo;
                        entity = oscard[Symbol.iterator];
                        oscard = entity().next;
                        zuuluu = oscard().value;
                        michal = entity;
                        tangon = undefined;
                        report = michal === tangon;
                        michal = undefined;
                        if(report) { _fun00020_ip = 27; continue _fun00019 }
 24:
                        michal = zuuluu;
 27:
                        zuuluu = undefined;
                        if(report) { _fun00020_ip = 57; continue _fun00019 }
 32:
                        golfie = oscard().value;
                        oscard = entity;
                        oscard = oscard === tangon;
                        zuuluu = undefined;
                        report = oscard;
                        if(oscard) { _fun00020_ip = 57; continue _fun00019 }
 51:
                        zuuluu = golfie;
                        report = oscard;
 57:
                        if(report) { _fun00020_ip = 63; continue _fun00019 }
 60:
                        entity.return();
 63:
                        entity = new Array(2);
                        entity[0] = michal;
                        michal = _closure1_slot16;
                        michal = michal.bind(tangon)(zuuluu);
                        entity[1] = michal;
                        return entity;
                    }
                };
                zuuluu = zuuluu.bind(report)(michal);
                michal = undefined;
                michal = tangon.bind(michal)(zuuluu);
                _closure1_slot10 = michal;
                michal = true;
                _closure1_slot8 = michal;
 132:
                michal = _closure1_slot14;
                entity = undefined;
                michal = michal.bind(entity)();
                return entity;
            }
        };
        var _closure1_slot20 = michal;
        golfie = global;
        romeon = golfie.Object;
        yankee = romeon.defineProperty;
        offset = {};
        entity = true;
        offset['value'] = entity;
        entity = '__esModule';
        entity = yankee.bind(romeon)(zuuluu, entity, offset);
        entity = 0;
        offset = verify[entity];
        entity = undefined;
        offset = option.bind(entity)(offset);
        yankee = offset.TOKENS_KEY;
        var _closure1_slot2 = yankee;
        offset = offset.TOKEN_KEY;
        var _closure1_slot3 = offset;
        offset = 'dQw4w9WgXcQ:';
        var _closure1_slot4 = offset;
        offset = null;
        var _closure1_slot5 = offset;
        golfie = golfie.window;
        golfie = golfie.DiscordNative;
        if(!(offset != golfie)) { _fun00002_ip = 198; continue _fun00001 }
 188:
        golfie = golfie.safeStorage;
        _closure1_slot5 = golfie;
 198:
        golfie = false;
        var _closure1_slot8 = golfie;
        offset = {};
        var _closure1_slot9 = offset;
        offset = {};
        var _closure1_slot10 = offset;
        var _closure1_slot11 = golfie;
        var _closure1_slot12 = golfie;
        golfie = 2;
        golfie = verify[golfie];
        verify = option.bind(entity)(golfie);
        option = verify.fileFinishedImporting;
        golfie = '../discord_common/js/shared/lib/TokenManager.tsx';
        golfie = option.bind(verify)(golfie);
        golfie = function() { // Original name: init
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                zuuluu = _closure1_slot12;
                if(zuuluu) { _fun00022_ip = 204; continue _fun00021 }
 15:
                report = _closure1_slot0;
                oscard = _closure1_slot1;
                zuuluu = 1;
                golfie = oscard[zuuluu];
                tangon = undefined;
                golfie = report.bind(tangon)(golfie);
                verify = golfie.Storage;
                option = verify.get;
                golfie = _closure1_slot3;
                golfie = option.bind(verify)(golfie);
                _closure1_slot7 = golfie;
                zuuluu = oscard[zuuluu];
                zuuluu = report.bind(tangon)(zuuluu);
                oscard = zuuluu.Storage;
                report = oscard.get;
                zuuluu = _closure1_slot2;
                zuuluu = report.bind(oscard)(zuuluu);
                if(zuuluu) { _fun00022_ip = 95; continue _fun00021 }
 93:
                zuuluu = {};
 95:
                _closure1_slot10 = zuuluu;
                report = _closure1_slot15;
                zuuluu = _closure1_slot7;
                report = report.bind(tangon)(zuuluu);
                zuuluu = report.decryptedToken;
                report = report.wasEncrypted;
                _closure1_slot8 = report;
                _closure1_slot6 = zuuluu;
                zuuluu = _closure1_slot13;
                report = global;
                golfie = report.Object;
                oscard = golfie.entries;
                report = _closure1_slot10;
                golfie = oscard.bind(golfie)(report);
                oscard = golfie.map;
                report = function(argFoo) {
                    _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                        oscard = argFoo;
                        entity = oscard[Symbol.iterator];
                        oscard = entity().next;
                        michal = oscard().value;
                        zuuluu = entity;
                        report = undefined;
                        tangon = zuuluu === report;
                        zuuluu = undefined;
                        if(tangon) { _fun00024_ip = 27; continue _fun00023 }
 24:
                        zuuluu = michal;
 27:
                        michal = undefined;
                        if(tangon) { _fun00024_ip = 57; continue _fun00023 }
 32:
                        golfie = oscard().value;
                        oscard = entity;
                        oscard = oscard === report;
                        michal = undefined;
                        tangon = oscard;
                        if(oscard) { _fun00024_ip = 57; continue _fun00023 }
 51:
                        michal = golfie;
                        tangon = oscard;
 57:
                        if(tangon) { _fun00024_ip = 63; continue _fun00023 }
 60:
                        entity.return();
 63:
                        entity = _closure1_slot15;
                        entity = entity.bind(report)(michal);
                        michal = entity.decryptedToken;
                        entity = entity.wasEncrypted;
                        if(entity) { _fun00024_ip = 94; continue _fun00023 }
 90:
                        entity = _closure1_slot8;
 94:
                        _closure1_slot8 = entity;
                        entity = new Array(2);
                        entity[0] = zuuluu;
                        entity[1] = michal;
                        return entity;
                    }
                };
                oscard = oscard.bind(golfie)(report);
                report = oscard.filter;
                entity = function(argFoo) {
                    _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                        tangon = argFoo;
                        entity = tangon[Symbol.iterator];
                        tangon = entity().next;
                        michal = tangon().value;
                        michal = entity;
                        oscard = undefined;
                        zuuluu = michal === oscard;
                        michal = undefined;
                        if(zuuluu) { _fun00026_ip = 49; continue _fun00025 }
 24:
                        report = tangon().value;
                        tangon = entity;
                        tangon = tangon === oscard;
                        michal = undefined;
                        zuuluu = tangon;
                        if(tangon) { _fun00026_ip = 49; continue _fun00025 }
 43:
                        michal = report;
                        zuuluu = tangon;
 49:
                        if(zuuluu) { _fun00026_ip = 55; continue _fun00025 }
 52:
                        entity.return();
 55:
                        entity = null;
                        entity = entity != michal;
                        return entity;
                    }
                };
                entity = report.bind(oscard)(entity);
                entity = zuuluu.bind(tangon)(entity);
                _closure1_slot9 = entity;
                entity = true;
                _closure1_slot12 = entity;
 204:
                entity = undefined;
                return entity;
            }
        };
        zuuluu['init'] = golfie;
        golfie = function() { // Original name: getAnalyticsToken
            zuuluu = _closure1_slot17;
            michal = undefined;
            entity = '__analytics__';
            entity = zuuluu.bind(michal)(entity);
            return entity;
        };
        zuuluu['getAnalyticsToken'] = golfie;
        zuuluu['getToken'] = oscard;
        oscard = function(argFoo) { // Original name: setAnalyticsToken
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                tangon = argFoo;
                entity = null;
                if(!(entity == tangon)) { _fun00028_ip = 31; continue _fun00027 }
 9:
                zuuluu = _closure1_slot19;
                michal = undefined;
                entity = '__analytics__';
                entity = zuuluu.bind(michal)(entity);
                _fun00028_ip = 52; continue _fun00027;
 31:
                zuuluu = _closure1_slot18;
                michal = undefined;
                entity = '__analytics__';
                entity = zuuluu.bind(michal)(tangon, entity);
 52:
                entity = undefined;
                return entity;
            }
        };
        zuuluu['setAnalyticsToken'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: setToken
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                tangon = argFoo;
                zuuluu = argBar;
                entity = null;
                if(!(entity == tangon)) { _fun00030_ip = 28; continue _fun00029 }
 12:
                michal = _closure1_slot19;
                entity = undefined;
                entity = michal.bind(entity)(zuuluu);
                _fun00030_ip = 47; continue _fun00029;
 28:
                _closure1_slot6 = tangon;
                michal = _closure1_slot18;
                entity = undefined;
                entity = michal.bind(entity)(tangon, zuuluu);
 47:
                entity = undefined;
                return entity;
            }
        };
        zuuluu['setToken'] = oscard;
        oscard = function() { // Original name: hideToken
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                michal = _closure1_slot11;
                if(michal) { _fun00032_ip = 26; continue _fun00031 }
 10:
                michal = true;
                _closure1_slot11 = michal;
                michal = _closure1_slot14;
                entity = undefined;
                entity = michal.bind(entity)();
 26:
                entity = undefined;
                return entity;
            }
        };
        zuuluu['hideToken'] = oscard;
        oscard = function() { // Original name: showToken
            _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                michal = _closure1_slot11;
                if(!michal) { _fun00034_ip = 26; continue _fun00033 }
 10:
                michal = false;
                _closure1_slot11 = michal;
                michal = _closure1_slot14;
                entity = undefined;
                entity = michal.bind(entity)();
 26:
                entity = undefined;
                return entity;
            }
        };
        zuuluu['showToken'] = oscard;
        zuuluu['removeToken'] = report;
        tangon = function() { // Original name: removeAnalyticsToken
            zuuluu = _closure1_slot19;
            michal = undefined;
            entity = '__analytics__';
            entity = zuuluu.bind(michal)(entity);
            return entity;
        };
        zuuluu['removeAnalyticsToken'] = tangon;
        zuuluu['encryptAndStoreTokens'] = michal;
        return entity;
    }
})();