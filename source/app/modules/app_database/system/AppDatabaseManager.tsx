// app/modules/app_database/system/AppDatabaseManager.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 46:
            if(michal) { _fun00002_ip = 55; continue _fun00001 }
 49:
            michal = zuuluu.@@iterator;
 55:
            if(michal) { _fun00002_ip = 345; continue _fun00001 }
 61:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 323; continue _fun00001 }
 86:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 270; continue _fun00001 }
 110:
            golfie = {};
            verify = golfie.toString;
            golfie = verify.call;
            yankee = golfie.bind(verify)(zuuluu);
            offset = yankee.slice;
            verify = 8;
            golfie = -1;
            verify = offset.bind(yankee)(verify, golfie);
            golfie = 'Object';
            golfie = golfie === verify;
            if(!golfie) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golfie = zuuluu.constructor;
 163:
            offset = verify;
            if(!golfie) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 179:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot10;
            golfie = verify.bind(option)(zuuluu, option);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 265:
            oscard = golfie;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golfie = _closure1_slot10;
            oscard = golfie.bind(option)(zuuluu, option);
 283:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 323:
            if(!tangon) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tangon;
 330:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    michal = false;
                    entity['done'] = michal;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    michal = parseFloat(michal);
                    tangon = michal + 1;
                    _closure2_slot1 = tangon;
                    michal = zuuluu[michal];
                    entity['value'] = michal;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    michal = {};
                    zuuluu = true;
                    michal['done'] = zuuluu;
                    entity = michal;
 67:
                    return entity;
                }
            };
            return entity;
 345:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    tangon = global;
    offset = tangon.Object;
    verify = offset.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, golfie);
    entity = 0;
    golfie = oscard[entity];
    entity = undefined;
    golfie = option.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    golfie = 1;
    golfie = oscard[golfie];
    golfie = option.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    golfie = 2;
    golfie = oscard[golfie];
    golfie = option.bind(entity)(golfie);
    var _closure1_slot5 = golfie;
    golfie = 3;
    golfie = oscard[golfie];
    golfie = option.bind(entity)(golfie);
    var _closure1_slot6 = golfie;
    golfie = 4;
    golfie = oscard[golfie];
    verify = option.bind(entity)(golfie);
    golfie = verify.prototype;
    option = Object.create(golfie, {constructor: {value: verify}});
    foxtra = 'AppDatabaseManager';
    backup = option;
    golfie = new backup[verify](foxtra, romeon);
    golfie = golfie instanceof Object ? golfie : option;
    var _closure1_slot7 = golfie;
    option = tangon.Set;
    tangon = option.prototype;
    golfie = Object.create(tangon, {constructor: {value: option}});
    foxtra = ['MESSAGE_CREATE'];
    backup = golfie;
    tangon = new backup[option](foxtra, romeon);
    tangon = tangon instanceof Object ? tangon : golfie;
    var _closure1_slot8 = tangon;
    michal = function() {
        report = function(argFoo, argBar, argBaz) { // Original name: AppDatabaseManager
            yankee = argFoo;
            report = argBaz;
            michal = this;
            var _closure3_slot0 = michal;
            oscard = _closure1_slot4;
            verify = _closure2_slot0;
            entity = undefined;
            oscard = oscard.bind(entity)(michal, verify);
            oscard = verify.computeEntries;
            option = oscard.bind(verify)(yankee, report);
            golfie = _closure1_slot3;
            oscard = 2;
            offset = golfie.bind(entity)(option, oscard);
            oscard = 0;
            golfie = offset[oscard];
            option = 1;
            option = offset[option];
            michal['name'] = yankee;
            michal['entries'] = option;
            michal['actions'] = golfie;
            golfie = null;
            michal['lastDatabase'] = golfie;
            romeon = verify.register;
            golfie = '_CLEAR_CACHES';
            result = yankee + golfie;
            output = ['CLEAR_CACHES'];
            sizing = new Array(0);
            kiloes = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zuuluu = _closure1_slot9;
                    entity = _closure3_slot0;
                    michal = entity.entries;
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.bind(entity)();
                    michal = zuuluu.done;
                    if(michal) { _fun00008_ip = 69; continue _fun00007 }
 39:
                    report = zuuluu.value;
                    michal = report.reset;
                    michal = michal.bind(report)();
                    report = tangon.bind(entity)();
                    michal = report.done;
                    zuuluu = report;
                    if(!michal) { _fun00008_ip = 39; continue _fun00007 }
 69:
                    return entity;
                }
            };
            echoed = verify;
            tangon = echoed[romeon](result, output, sizing, kiloes, backup);
            option = verify.register;
            golfie = michal.actions;
            tangon = golfie.keys;
            output = tangon.bind(golfie)();
            golfie = new Array(0);
            result = golfie;
            sizing = 0;
            tangon = arraySpread(result, output, sizing);
            oscard = michal.handleAction;
            tangon = oscard.bind;
            kiloes = tangon.bind(oscard)(michal);
            sizing = argBar;
            echoed = verify;
            result = yankee;
            output = golfie;
            tangon = echoed[option](result, output, sizing, kiloes, backup);
            tangon = _closure1_slot7;
            zuuluu = tangon.verbose;
            sizing = report.length;
            michal = michal.actions;
            backup = michal.size;
            michal = global;
            michal = michal.HermesInternal;
            option = michal.concat;
            echoed = '';
            output = ' created with ';
            kiloes = ' modules, ';
            foxtra = ' distinct actions.';
            result = yankee;
            michal = echoed[option](result, output, sizing, kiloes, backup, foxtra, romeon);
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        var _closure2_slot0 = report;
        tangon = _closure1_slot5;
        entity = {};
        michal = 'handleAction';
        entity['key'] = michal;
        michal = function(argFoo) { // Original name: value
            tangon = argFoo;
            zuuluu = this;
            michal = zuuluu.validateInDev;
            entity = tangon.type;
            entity = michal.bind(zuuluu)(entity);
            report = _closure1_slot6;
            michal = report.getId;
            report = michal.bind(report)();
            oscard = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 5;
            michal = michal[entity];
            entity = undefined;
            michal = oscard.bind(entity)(michal);
            entity = michal.database;
            michal = entity.bind(michal)(report);
            entity = zuuluu.resetModules;
            entity = entity.bind(zuuluu)(tangon, michal);
            entity = zuuluu.executeModules;
            entity = entity.bind(zuuluu)(tangon, michal);
            entity = false;
            return entity;
        };
        entity['value'] = michal;
        zuuluu = new Array(4);
        zuuluu[0] = entity;
        entity = {};
        michal = 'resetModules';
        entity['key'] = michal;
        michal = function(argFoo, argBar) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                michal = argBar;
                entity = this;
                zuuluu = entity.lastDatabase;
                if(!(michal !== zuuluu)) { _fun00010_ip = 160; continue _fun00009 }
 19:
                oscard = _closure1_slot7;
                report = oscard.verbose;
                result = entity.lastDatabase;
                tangon = argFoo;
                backup = tangon.type;
                tangon = global;
                tangon = tangon.HermesInternal;
                offset = tangon.concat;
                echoed = 'database has changed (was: ';
                output = ', now: ';
                kiloes = ', action: ';
                foxtra = '). resetting modules.';
                sizing = michal;
                tangon = echoed[offset](result, output, sizing, kiloes, backup, foxtra, romeon);
                tangon = report.bind(oscard)(tangon);
                tangon = _closure1_slot9;
                zuuluu = entity.entries;
                oscard = undefined;
                report = tangon.bind(oscard)(zuuluu);
                tangon = report.bind(oscard)();
                zuuluu = tangon.done;
                if(zuuluu) { _fun00010_ip = 154; continue _fun00009 }
 124:
                golfie = tangon.value;
                zuuluu = golfie.reset;
                zuuluu = zuuluu.bind(golfie)();
                golfie = report.bind(oscard)();
                zuuluu = golfie.done;
                tangon = golfie;
                if(!zuuluu) { _fun00010_ip = 124; continue _fun00009 }
 154:
                entity['lastDatabase'] = michal;
 160:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = michal;
        zuuluu[1] = entity;
        entity = {};
        michal = 'executeModules';
        entity['key'] = michal;
        michal = function(argFoo, argBar) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                michal = argFoo;
                golfie = argBar;
                var _closure3_slot0 = michal;
                var _closure3_slot1 = golfie;
                kiloes = michal.type;
                entity = this;
                tangon = entity.actions;
                entity = tangon.get;
                tangon = entity.bind(tangon)(kiloes);
                var _closure3_slot2 = tangon;
                oscard = null;
                report = oscard == golfie;
                entity = undefined;
                backup = undefined;
                if(report) { _fun00012_ip = 66; continue _fun00011 }
 57:
                report = golfie.state;
                backup = report.bind(golfie)();
 66:
                if(!(oscard != tangon)) { _fun00012_ip = 317; continue _fun00011 }
 73:
                report = tangon.length;
                tangon = 0;
                if(!(tangon !== report)) { _fun00012_ip = 317; continue _fun00011 }
 87:
                if(!(oscard != golfie)) { _fun00012_ip = 130; continue _fun00011 }
 91:
                option = _closure1_slot0;
                verify = _closure1_slot2;
                report = 6;
                report = verify[report];
                report = option.bind(entity)(report);
                report = report.DatabaseState;
                report = report.Open;
                if(!(backup !== report)) { _fun00012_ip = 198; continue _fun00011 }
 130:
                verify = _closure1_slot7;
                option = verify.verbose;
                report = global;
                report = report.HermesInternal;
                foxtra = report.concat;
                ctrled = 'no usable database; skipping action (type: ';
                update = ', database: ';
                result = ', state: ';
                sizing = ')';
                source = kiloes;
                echoed = golfie;
                output = backup;
                report = ctrled[foxtra](source, update, echoed, result, output, sizing, kiloes);
                report = option.bind(verify)(report);
                _fun00012_ip = 317; continue _fun00011;
 198:
                report = golfie.transaction;
                verify = _closure1_slot8;
                option = verify.has;
                tangon = michal.type;
                tangon = option.bind(verify)(tangon);
                oscard = null;
                if(tangon) { _fun00012_ip = 257; continue _fun00011 }
 228:
                verify = michal.type;
                tangon = global;
                tangon = tangon.HermesInternal;
                option = tangon.concat;
                tangon = 'Dispatch ';
                oscard = option.bind(tangon)(verify);
 257:
                tangon = function(argFoo) {
                    michal = argFoo;
                    var _closure4_slot0 = michal;
                    zuuluu = _closure3_slot2;
                    michal = zuuluu.forEach;
                    entity = function(argFoo) {
                        tangon = argFoo;
                        zuuluu = tangon.execute;
                        michal = _closure3_slot0;
                        entity = _closure4_slot0;
                        entity = zuuluu.bind(tangon)(michal, entity);
                        return entity;
                    };
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                report = report.bind(golfie)(tangon, oscard);
                tangon = report.catch;
                zuuluu = function(argFoo) {
                    report = _closure2_slot0;
                    tangon = report.handleException;
                    zuuluu = _closure3_slot1;
                    michal = _closure3_slot0;
                    entity = argFoo;
                    entity = tangon.bind(report)(zuuluu, michal, entity);
                    return entity;
                };
                tangon = tangon.bind(report)(zuuluu);
                report = michal.type;
                zuuluu = 'WRITE_CACHES';
                if(!(zuuluu === report)) { _fun00012_ip = 317; continue _fun00011 }
 301:
                zuuluu = michal.promisesToWaitOn;
                michal = zuuluu.push;
                michal = michal.bind(zuuluu)(tangon);
 317:
                return entity;
            }
        };
        entity['value'] = michal;
        zuuluu[2] = entity;
        entity = {};
        michal = 'validateInDev';
        entity['key'] = michal;
        michal = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        entity['value'] = michal;
        zuuluu[3] = entity;
        entity = {};
        michal = 'handleException';
        entity['key'] = michal;
        michal = function(argFoo, argBar, argBaz) { // Original name: value
            oscard = argBaz;
            report = _closure1_slot7;
            tangon = report.info;
            zuuluu = oscard.stack;
            michal = 'disabling database · error encountered during dispatch';
            michal = tangon.bind(report)(michal, oscard, zuuluu);
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 7;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            report = 'RESET_SOCKET';
            michal['type'] = report;
            report = {};
            report['error'] = oscard;
            oscard = argBar;
            verify = oscard.type;
            oscard = global;
            oscard = oscard.HermesInternal;
            option = oscard.concat;
            golfie = 'AppDatabaseManager(';
            oscard = ')';
            oscard = option.bind(golfie)(verify, oscard);
            report['action'] = oscard;
            oscard = true;
            report['clearCache'] = oscard;
            michal['args'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(3);
        michal[0] = entity;
        entity = {};
        golfie = 'computeEntries';
        entity['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                tangon = argBar;
                michal = argFoo;
                var _closure3_slot0 = michal;
                michal = global;
                michal = michal.Map;
                zuuluu = michal.prototype;
                zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
                sizing = zuuluu;
                michal = new sizing[michal](kiloes);
                zuuluu = michal instanceof Object ? michal : zuuluu;
                michal = tangon.map;
                entity = function(argFoo) {
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 8;
                    michal = michal[entity];
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
                    tangon = entity.Entry;
                    oscard = _closure3_slot0;
                    entity = tangon.prototype;
                    michal = Object.create(entity, {constructor: {value: tangon}});
                    report = argFoo;
                    golfie = michal;
                    entity = new golfie[tangon](oscard, report, tangon);
                    entity = entity instanceof Object ? entity : michal;
                    return entity;
                };
                michal = michal.bind(tangon)(entity);
                report = zuuluu.set;
                tangon = 'LOGOUT';
                entity = new Array(0);
                entity = report.bind(zuuluu)(tangon, entity);
                report = zuuluu.set;
                tangon = 'LOGIN_RESET';
                entity = new Array(0);
                entity = report.bind(zuuluu)(tangon, entity);
                entity = _closure1_slot9;
                golfie = undefined;
                oscard = entity.bind(golfie)(michal);
                tangon = oscard.bind(golfie)();
                entity = tangon.done;
                report = tangon;
                tangon = undefined;
                if(entity) { _fun00014_ip = 244; continue _fun00013 }
 126:
                yankee = report.value;
                verify = _closure1_slot9;
                entity = yankee.actions;
                offset = verify.bind(golfie)(entity);
                verify = offset.bind(golfie)();
                entity = verify.done;
                if(entity) { _fun00014_ip = 229; continue _fun00013 }
 158:
                romeon = verify.value;
                entity = zuuluu.has;
                entity = entity.bind(zuuluu)(romeon);
                if(entity) { _fun00014_ip = 191; continue _fun00013 }
 176:
                foxtra = zuuluu.set;
                entity = new Array(0);
                entity = foxtra.bind(zuuluu)(romeon, entity);
 191:
                entity = zuuluu.get;
                foxtra = entity.bind(zuuluu)(romeon);
                entity = foxtra.push;
                entity = entity.bind(foxtra)(yankee);
                foxtra = offset.bind(golfie)();
                entity = foxtra.done;
                verify = foxtra;
                tangon = romeon;
                if(!entity) { _fun00014_ip = 158; continue _fun00013 }
 229:
                verify = oscard.bind(golfie)();
                entity = verify.done;
                report = verify;
                if(!entity) { _fun00014_ip = 126; continue _fun00013 }
 244:
                entity = new Array(2);
                entity[0] = zuuluu;
                entity[1] = michal;
                return entity;
            }
        };
        entity['value'] = golfie;
        michal[1] = entity;
        entity = {};
        golfie = 'register';
        entity['key'] = golfie;
        oscard = function(argFoo, argBar, argBaz, argCor) { // Original name: value
            foxtra = argBar;
            michal = argCor;
            var _closure3_slot0 = michal;
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            michal = 7;
            golfie = report[michal];
            zuuluu = undefined;
            offset = tangon.bind(zuuluu)(golfie);
            verify = offset.register;
            golfie = global;
            yankee = golfie.Object;
            option = yankee.fromEntries;
            romeon = foxtra.map;
            golfie = function(argFoo) {
                entity = new Array(2);
                michal = argFoo;
                entity[0] = michal;
                michal = _closure3_slot0;
                entity[1] = michal;
                return entity;
            };
            golfie = romeon.bind(foxtra)(golfie);
            sizing = option.bind(yankee)(golfie);
            golfie = _closure1_slot0;
            oscard = report[michal];
            oscard = golfie.bind(zuuluu)(oscard);
            oscard = oscard.DispatchBand;
            backup = oscard.Database;
            output = argFoo;
            kiloes = function() {
                entity = undefined;
                return entity;
            };
            result = offset;
            entity = result[verify](output, sizing, kiloes, backup, foxtra);
            michal = report[michal];
            tangon = tangon.bind(zuuluu)(michal);
            zuuluu = tangon.addDependencies;
            michal = argBaz;
            michal = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(report, zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/app_database/system/AppDatabaseManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['AppDatabaseManager'] = michal;
    return entity;
})();