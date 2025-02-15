// discord_common/js/shared/lib/TokenManager.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        golf = argBar;
        zulu = argFred;
        options = argPlugh;
        var _closure1_slot0 = golf;
        var _closure1_slot1 = options;
        entity = function(argFoo) { // Original name: fromEntries
            tango = new Array(0);
            oscar = argFoo;
            report = 0;
            golf = tango;
            entity = arraySpread(golf, oscar, report);
            zulu = tango.reduce;
            mike = function(argFoo, argBar) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = argFoo;
                    oscar = argBar;
                    tango = oscar[Symbol.iterator];
                    oscar = tango().next;
                    mike = oscar().value;
                    zulu = tango;
                    options = undefined;
                    report = zulu === options;
                    zulu = undefined;
                    if(report) { _fun00004_ip = 30; continue _fun00003 }
 27:
                    zulu = mike;
 30:
                    mike = undefined;
                    if(report) { _fun00004_ip = 60; continue _fun00003 }
 35:
                    golf = oscar().value;
                    oscar = tango;
                    oscar = oscar === options;
                    mike = undefined;
                    report = oscar;
                    if(oscar) { _fun00004_ip = 60; continue _fun00003 }
 54:
                    mike = golf;
                    report = oscar;
 60:
                    if(report) { _fun00004_ip = 66; continue _fun00003 }
 63:
                    tango.return();
 66:
                    entity[zulu] = mike;
                    return entity;
                }
            };
            entity = {};
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        var _closure1_slot13 = entity;
        entity = function() { // Original name: storeTokens
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                mike = _closure1_slot11;
                if(mike) { _fun00006_ip = 164; continue _fun00005 }
 13:
                zulu = _closure1_slot7;
                mike = null;
                if(!(mike == zulu)) { _fun00006_ip = 68; continue _fun00005 }
 23:
                tango = _closure1_slot0;
                zulu = _closure1_slot1;
                mike = 1;
                zulu = zulu[mike];
                mike = undefined;
                mike = tango.bind(mike)(zulu);
                tango = mike.Storage;
                zulu = tango.remove;
                mike = _closure1_slot3;
                mike = zulu.bind(tango)(mike);
                _fun00006_ip = 115; continue _fun00005;
 68:
                tango = _closure1_slot0;
                zulu = _closure1_slot1;
                mike = 1;
                zulu = zulu[mike];
                mike = undefined;
                mike = tango.bind(mike)(zulu);
                report = mike.Storage;
                tango = report.set;
                zulu = _closure1_slot3;
                mike = _closure1_slot7;
                mike = tango.bind(report)(zulu, mike);
 115:
                tango = _closure1_slot0;
                zulu = _closure1_slot1;
                mike = 1;
                zulu = zulu[mike];
                mike = undefined;
                zulu = tango.bind(mike)(zulu);
                oscar = zulu.Storage;
                report = oscar.set;
                tango = _closure1_slot2;
                zulu = _closure1_slot10;
                zulu = report.bind(oscar)(tango, zulu);
                return mike;
 164:
                tango = _closure1_slot0;
                report = _closure1_slot1;
                mike = 1;
                oscar = report[mike];
                zulu = undefined;
                oscar = tango.bind(zulu)(oscar);
                options = oscar.Storage;
                golf = options.remove;
                oscar = _closure1_slot3;
                oscar = golf.bind(options)(oscar);
                mike = report[mike];
                mike = tango.bind(zulu)(mike);
                zulu = mike.Storage;
                mike = zulu.remove;
                entity = _closure1_slot2;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            }
        };
        var _closure1_slot14 = entity;
        entity = function(argFoo) { // Original name: maybeDecryptToken
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                golf = argFoo;
                entity = null;
                if(!(entity != golf)) { _fun00008_ip = 135; continue _fun00007 }
 12:
                zulu = golf.length;
                mike = 0;
                if(!(mike !== zulu)) { _fun00008_ip = 135; continue _fun00007 }
 23:
                mike = _closure1_slot5;
                if(!(entity != mike)) { _fun00008_ip = 65; continue _fun00007 }
 34:
                entity = mike.isEncryptionAvailable;
                entity = entity.bind(mike)();
                if(!entity) { _fun00008_ip = 65; continue _fun00007 }
 47:
                mike = golf.startsWith;
                entity = _closure1_slot4;
                entity = mike.bind(golf)(entity);
                if(entity) { _fun00008_ip = 81; continue _fun00007 }
 65:
                entity = {};
                entity['decryptedToken'] = golf;
                mike = false;
                entity['wasEncrypted'] = mike;
                _fun00008_ip = 133; continue _fun00007;
 81:
                mike = {};
                report = _closure1_slot5;
                tango = report.decryptString;
                oscar = golf.substring;
                zulu = _closure1_slot4;
                zulu = zulu.length;
                zulu = oscar.bind(golf)(zulu);
                zulu = tango.bind(report)(zulu);
                mike['decryptedToken'] = zulu;
                zulu = true;
                mike['wasEncrypted'] = zulu;
                entity = mike;
 133:
                _fun00008_ip = 145; continue _fun00007;
 135:
                entity = {'decryptedToken': null, 'wasEncrypted': false};
 145:
                return entity;
            }
        };
        var _closure1_slot15 = entity;
        entity = function(argFoo) { // Original name: maybeEncryptToken
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                tango = argFoo;
                report = _closure1_slot5;
                zulu = null;
                entity = tango;
                if(!(zulu != report)) { _fun00010_ip = 98; continue _fun00009 }
 19:
                zulu = report.isEncryptionAvailable;
                zulu = zulu.bind(report)();
                entity = tango;
                if(!zulu) { _fun00010_ip = 98; continue _fun00009 }
 35:
                report = tango.startsWith;
                zulu = _closure1_slot4;
                zulu = report.bind(tango)(zulu);
                entity = tango;
                if(zulu) { _fun00010_ip = 98; continue _fun00009 }
 56:
                report = _closure1_slot4;
                zulu = _closure1_slot5;
                mike = zulu.encryptString;
                tango = mike.bind(zulu)(tango);
                mike = global;
                mike = mike.HermesInternal;
                zulu = mike.concat;
                mike = '';
                entity = zulu.bind(mike)(report, tango);
 98:
                return entity;
            }
        };
        var _closure1_slot16 = entity;
        tango = function(argFoo) { // Original name: removeToken
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                oscar = argFoo;
                mike = _closure1_slot6;
                entity = null;
                if(!(entity != oscar)) { _fun00012_ip = 40; continue _fun00011 }
 16:
                tango = _closure1_slot9;
                mike = tango[oscar];
                report = _closure1_slot9;
                report = delete report[oscar];
                report = _closure1_slot10;
                report = delete report[oscar];
 40:
                tango = _closure1_slot6;
                if(!(mike === tango)) { _fun00012_ip = 56; continue _fun00011 }
 48:
                var _closure1_slot6 = entity;
                var _closure1_slot7 = entity;
 56:
                tango = _closure1_slot14;
                zulu = undefined;
                zulu = tango.bind(zulu)();
                entity = entity != mike;
                return entity;
            }
        };
        var _closure1_slot17 = tango;
        mike = function() { // Original name: encryptAndStoreTokens
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                tango = _closure1_slot5;
                zulu = null;
                if(!(zulu != tango)) { _fun00014_ip = 26; continue _fun00013 }
 13:
                mike = tango.isEncryptionAvailable;
                mike = mike.bind(tango)();
                if(mike) { _fun00014_ip = 44; continue _fun00013 }
 26:
                mike = _closure1_slot6;
                _closure1_slot7 = mike;
                mike = _closure1_slot9;
                _closure1_slot10 = mike;
                _fun00014_ip = 132; continue _fun00013;
 44:
                mike = _closure1_slot6;
                if(!(zulu != mike)) { _fun00014_ip = 71; continue _fun00013 }
 52:
                tango = _closure1_slot16;
                zulu = _closure1_slot6;
                mike = undefined;
                mike = tango.bind(mike)(zulu);
                _closure1_slot7 = mike;
 71:
                tango = _closure1_slot13;
                mike = global;
                report = mike.Object;
                zulu = report.entries;
                mike = _closure1_slot9;
                report = zulu.bind(report)(mike);
                zulu = report.map;
                mike = function(argFoo) {
                    _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                        oscar = argFoo;
                        entity = oscar[Symbol.iterator];
                        oscar = entity().next;
                        zulu = oscar().value;
                        mike = entity;
                        tango = undefined;
                        report = mike === tango;
                        mike = undefined;
                        if(report) { _fun00016_ip = 27; continue _fun00015 }
 24:
                        mike = zulu;
 27:
                        zulu = undefined;
                        if(report) { _fun00016_ip = 57; continue _fun00015 }
 32:
                        golf = oscar().value;
                        oscar = entity;
                        oscar = oscar === tango;
                        zulu = undefined;
                        report = oscar;
                        if(oscar) { _fun00016_ip = 57; continue _fun00015 }
 51:
                        zulu = golf;
                        report = oscar;
 57:
                        if(report) { _fun00016_ip = 63; continue _fun00015 }
 60:
                        entity.return();
 63:
                        entity = new Array(2);
                        entity[0] = mike;
                        mike = _closure1_slot16;
                        mike = mike.bind(tango)(zulu);
                        entity[1] = mike;
                        return entity;
                    }
                };
                zulu = zulu.bind(report)(mike);
                mike = undefined;
                mike = tango.bind(mike)(zulu);
                _closure1_slot10 = mike;
                mike = true;
                _closure1_slot8 = mike;
 132:
                mike = _closure1_slot14;
                entity = undefined;
                mike = mike.bind(entity)();
                return entity;
            }
        };
        var _closure1_slot18 = mike;
        oscar = global;
        yankee = oscar.Object;
        offset = yankee.defineProperty;
        verify = {};
        entity = true;
        verify['value'] = entity;
        entity = '__esModule';
        entity = offset.bind(yankee)(zulu, entity, verify);
        entity = 0;
        verify = options[entity];
        entity = undefined;
        verify = golf.bind(entity)(verify);
        offset = verify.TOKENS_KEY;
        var _closure1_slot2 = offset;
        verify = verify.TOKEN_KEY;
        var _closure1_slot3 = verify;
        verify = 'dQw4w9WgXcQ:';
        var _closure1_slot4 = verify;
        verify = null;
        var _closure1_slot5 = verify;
        oscar = oscar.window;
        oscar = oscar.DiscordNative;
        if(!(verify != oscar)) { _fun00002_ip = 180; continue _fun00001 }
 170:
        oscar = oscar.safeStorage;
        _closure1_slot5 = oscar;
 180:
        oscar = false;
        var _closure1_slot8 = oscar;
        verify = {};
        var _closure1_slot9 = verify;
        verify = {};
        var _closure1_slot10 = verify;
        var _closure1_slot11 = oscar;
        var _closure1_slot12 = oscar;
        oscar = 2;
        oscar = options[oscar];
        options = golf.bind(entity)(oscar);
        golf = options.fileFinishedImporting;
        oscar = '../discord_common/js/shared/lib/TokenManager.tsx';
        oscar = golf.bind(options)(oscar);
        oscar = function() { // Original name: init
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                zulu = _closure1_slot12;
                if(zulu) { _fun00018_ip = 204; continue _fun00017 }
 15:
                report = _closure1_slot0;
                oscar = _closure1_slot1;
                zulu = 1;
                golf = oscar[zulu];
                tango = undefined;
                golf = report.bind(tango)(golf);
                verify = golf.Storage;
                options = verify.get;
                golf = _closure1_slot3;
                golf = options.bind(verify)(golf);
                _closure1_slot7 = golf;
                zulu = oscar[zulu];
                zulu = report.bind(tango)(zulu);
                oscar = zulu.Storage;
                report = oscar.get;
                zulu = _closure1_slot2;
                zulu = report.bind(oscar)(zulu);
                if(zulu) { _fun00018_ip = 95; continue _fun00017 }
 93:
                zulu = {};
 95:
                _closure1_slot10 = zulu;
                report = _closure1_slot15;
                zulu = _closure1_slot7;
                report = report.bind(tango)(zulu);
                zulu = report.decryptedToken;
                report = report.wasEncrypted;
                _closure1_slot8 = report;
                _closure1_slot6 = zulu;
                zulu = _closure1_slot13;
                report = global;
                golf = report.Object;
                oscar = golf.entries;
                report = _closure1_slot10;
                golf = oscar.bind(golf)(report);
                oscar = golf.map;
                report = function(argFoo) {
                    _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                        oscar = argFoo;
                        entity = oscar[Symbol.iterator];
                        oscar = entity().next;
                        mike = oscar().value;
                        zulu = entity;
                        report = undefined;
                        tango = zulu === report;
                        zulu = undefined;
                        if(tango) { _fun00020_ip = 27; continue _fun00019 }
 24:
                        zulu = mike;
 27:
                        mike = undefined;
                        if(tango) { _fun00020_ip = 57; continue _fun00019 }
 32:
                        golf = oscar().value;
                        oscar = entity;
                        oscar = oscar === report;
                        mike = undefined;
                        tango = oscar;
                        if(oscar) { _fun00020_ip = 57; continue _fun00019 }
 51:
                        mike = golf;
                        tango = oscar;
 57:
                        if(tango) { _fun00020_ip = 63; continue _fun00019 }
 60:
                        entity.return();
 63:
                        entity = _closure1_slot15;
                        entity = entity.bind(report)(mike);
                        mike = entity.decryptedToken;
                        entity = entity.wasEncrypted;
                        if(entity) { _fun00020_ip = 94; continue _fun00019 }
 90:
                        entity = _closure1_slot8;
 94:
                        _closure1_slot8 = entity;
                        entity = new Array(2);
                        entity[0] = zulu;
                        entity[1] = mike;
                        return entity;
                    }
                };
                oscar = oscar.bind(golf)(report);
                report = oscar.filter;
                entity = function(argFoo) {
                    _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                        tango = argFoo;
                        entity = tango[Symbol.iterator];
                        tango = entity().next;
                        mike = tango().value;
                        mike = entity;
                        oscar = undefined;
                        zulu = mike === oscar;
                        mike = undefined;
                        if(zulu) { _fun00022_ip = 49; continue _fun00021 }
 24:
                        report = tango().value;
                        tango = entity;
                        tango = tango === oscar;
                        mike = undefined;
                        zulu = tango;
                        if(tango) { _fun00022_ip = 49; continue _fun00021 }
 43:
                        mike = report;
                        zulu = tango;
 49:
                        if(zulu) { _fun00022_ip = 55; continue _fun00021 }
 52:
                        entity.return();
 55:
                        entity = null;
                        entity = entity != mike;
                        return entity;
                    }
                };
                entity = report.bind(oscar)(entity);
                entity = zulu.bind(tango)(entity);
                _closure1_slot9 = entity;
                entity = true;
                _closure1_slot12 = entity;
 204:
                entity = undefined;
                return entity;
            }
        };
        zulu['init'] = oscar;
        oscar = function(argFoo) { // Original name: getToken
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                zulu = argFoo;
                entity = null;
                if(!(entity == zulu)) { _fun00024_ip = 18; continue _fun00023 }
 9:
                entity = _closure1_slot6;
                _fun00024_ip = 29; continue _fun00023;
 18:
                mike = _closure1_slot9;
                entity = mike[zulu];
 29:
                return entity;
            }
        };
        zulu['getToken'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: setToken
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                tango = argFoo;
                zulu = argBar;
                mike = null;
                if(!(mike == tango)) { _fun00026_ip = 28; continue _fun00025 }
 12:
                report = _closure1_slot17;
                entity = undefined;
                entity = report.bind(entity)(zulu);
                _fun00026_ip = 92; continue _fun00025;
 28:
                _closure1_slot6 = tango;
                if(!(mike != zulu)) { _fun00026_ip = 47; continue _fun00025 }
 39:
                mike = _closure1_slot9;
                mike[zulu] = tango;
 47:
                mike = _closure1_slot8;
                if(mike) { _fun00026_ip = 82; continue _fun00025 }
 54:
                mike = _closure1_slot6;
                _closure1_slot7 = mike;
                mike = _closure1_slot9;
                _closure1_slot10 = mike;
                zulu = _closure1_slot14;
                mike = undefined;
                mike = zulu.bind(mike)();
                _fun00026_ip = 92; continue _fun00025;
 82:
                mike = _closure1_slot18;
                entity = undefined;
                entity = mike.bind(entity)();
 92:
                entity = undefined;
                return entity;
            }
        };
        zulu['setToken'] = oscar;
        oscar = function() { // Original name: hideToken
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                mike = _closure1_slot11;
                if(mike) { _fun00028_ip = 26; continue _fun00027 }
 10:
                mike = true;
                _closure1_slot11 = mike;
                mike = _closure1_slot14;
                entity = undefined;
                entity = mike.bind(entity)();
 26:
                entity = undefined;
                return entity;
            }
        };
        zulu['hideToken'] = oscar;
        report = function() { // Original name: showToken
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                mike = _closure1_slot11;
                if(!mike) { _fun00030_ip = 26; continue _fun00029 }
 10:
                mike = false;
                _closure1_slot11 = mike;
                mike = _closure1_slot14;
                entity = undefined;
                entity = mike.bind(entity)();
 26:
                entity = undefined;
                return entity;
            }
        };
        zulu['showToken'] = report;
        zulu['removeToken'] = tango;
        zulu['encryptAndStoreTokens'] = mike;
        return entity;
    }
})();