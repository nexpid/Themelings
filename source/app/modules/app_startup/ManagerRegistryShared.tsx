// app/modules/app_startup/ManagerRegistryShared.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    zuuluu = argFre;
    tangon = argPlu;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = tangon;
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
            if(!michal) { _fun00002_ip = 45; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 45:
            if(michal) { _fun00002_ip = 54; continue _fun00001 }
 48:
            michal = zuuluu.@@iterator;
 54:
            if(michal) { _fun00002_ip = 344; continue _fun00001 }
 60:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 322; continue _fun00001 }
 85:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 282; continue _fun00001 }
 95:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 269; continue _fun00001 }
 109:
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
            if(!golfie) { _fun00002_ip = 162; continue _fun00001 }
 157:
            golfie = zuuluu.constructor;
 162:
            offset = verify;
            if(!golfie) { _fun00002_ip = 178; continue _fun00001 }
 168:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 178:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 186:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 194:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 233; continue _fun00001 }
 204:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 246; continue _fun00001 }
 233:
            verify = _closure1_slot5;
            golfie = verify.bind(option)(zuuluu, option);
 246:
            _fun00002_ip = 264; continue _fun00001;
 248:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 264:
            oscard = golfie;
            _fun00002_ip = 282; continue _fun00001;
 269:
            golfie = _closure1_slot5;
            oscard = golfie.bind(option)(zuuluu, option);
 282:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 322; continue _fun00001 }
 288:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 322:
            if(!tangon) { _fun00002_ip = 329; continue _fun00001 }
 325:
            _closure2_slot0 = tangon;
 329:
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
 344:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot4 = entity;
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
    var _closure1_slot5 = entity;
    entity = function(argFoo, argBar) { // Original name: validateInDevMode
        entity = argBar;
        entity = entity.actions;
        entity = undefined;
        return entity;
    };
    var _closure1_slot6 = entity;
    entity = function(argFoo) { // Original name: populateMap
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            oscard = argFoo;
            report = oscard.actions;
            entity = null;
            if(!(entity == report)) { _fun00008_ip = 19; continue _fun00007 }
 15:
            report = new Array(0);
 19:
            entity = oscard.hasStoreChangeListeners;
            if(entity) { _fun00008_ip = 34; continue _fun00007 }
 28:
            entity = oscard.loadAfterConnectionOpen;
 34:
            golfie = report;
            if(!entity) { _fun00008_ip = 94; continue _fun00007 }
 40:
            entity = report.includes;
            zuuluu = 'POST_CONNECTION_OPEN';
            michal = entity.bind(report)(zuuluu);
            entity = report;
            if(michal) { _fun00008_ip = 91; continue _fun00007 }
 60:
            michal = new Array(1);
            verify = 0;
            yankee = michal;
            offset = report;
            tangon = arraySpread(yankee, offset, verify);
            michal[tangon] = zuuluu;
            zuuluu = 1;
            zuuluu = tangon + zuuluu;
            entity = michal;
 91:
            golfie = entity;
 94:
            entity = oscard.loadRightBeforeConnectionOpen;
            zuuluu = golfie;
            if(!entity) { _fun00008_ip = 160; continue _fun00007 }
 106:
            entity = golfie.includes;
            tangon = 'CONNECTION_OPEN';
            michal = entity.bind(golfie)(tangon);
            entity = golfie;
            if(michal) { _fun00008_ip = 157; continue _fun00007 }
 126:
            michal = new Array(1);
            verify = 0;
            yankee = michal;
            offset = golfie;
            report = arraySpread(yankee, offset, verify);
            michal[report] = tangon;
            tangon = 1;
            tangon = report + tangon;
            entity = michal;
 157:
            zuuluu = entity;
 160:
            michal = _closure1_slot4;
            entity = undefined;
            tangon = michal.bind(entity)(zuuluu);
            zuuluu = tangon.bind(entity)();
            michal = zuuluu.done;
            if(michal) { _fun00008_ip = 247; continue _fun00007 }
 186:
            golfie = zuuluu.value;
            michal = _closure1_slot2;
            michal = golfie in michal;
            if(michal) { _fun00008_ip = 214; continue _fun00007 }
 202:
            option = _closure1_slot2;
            michal = new Array(0);
            option[golfie] = michal;
 214:
            michal = _closure1_slot2;
            golfie = michal[golfie];
            michal = golfie.push;
            michal = michal.bind(golfie)(oscard);
            golfie = tangon.bind(entity)();
            michal = golfie.done;
            zuuluu = golfie;
            if(!michal) { _fun00008_ip = 186; continue _fun00007 }
 247:
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = function(argFoo) { // Original name: handleAction
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.type;
            michal = 'CONNECTION_OPEN';
            michal = michal !== zuuluu;
            if(!michal) { _fun00010_ip = 32; continue _fun00009 }
 19:
            tangon = entity.type;
            zuuluu = 'OVERLAY_INITIALIZE';
            michal = zuuluu !== tangon;
 32:
            if(michal) { _fun00010_ip = 44; continue _fun00009 }
 35:
            michal = true;
            _closure1_slot3 = michal;
 44:
            tangon = entity.type;
            zuuluu = _closure1_slot2;
            zuuluu = tangon in zuuluu;
            if(!zuuluu) { _fun00010_ip = 213; continue _fun00009 }
 66:
            zuuluu = new Array(0);
            report = _closure1_slot4;
            oscard = _closure1_slot2;
            tangon = entity.type;
            tangon = oscard[tangon];
            golfie = undefined;
            oscard = report.bind(golfie)(tangon);
            report = oscard.bind(golfie)();
            tangon = report.done;
            if(tangon) { _fun00010_ip = 174; continue _fun00009 }
 106:
            option = report.value;
            tangon = _closure1_slot3;
            if(tangon) { _fun00010_ip = 139; continue _fun00009 }
 118:
            tangon = option.neverLoadBeforeConnectionOpen;
            if(!tangon) { _fun00010_ip = 139; continue _fun00009 }
 127:
            tangon = zuuluu.push;
            tangon = tangon.bind(zuuluu)(option);
            _fun00010_ip = 159; continue _fun00009;
 139:
            tangon = option.inlineRequire;
            option = tangon.bind(option)();
            tangon = option.initialize;
            tangon = tangon.bind(option)();
 159:
            option = oscard.bind(golfie)();
            tangon = option.done;
            report = option;
            if(!tangon) { _fun00010_ip = 106; continue _fun00009 }
 174:
            report = zuuluu.length;
            tangon = 0;
            if(!(!(report > tangon))) { _fun00010_ip = 200; continue _fun00009 }
 185:
            report = _closure1_slot2;
            tangon = entity.type;
            tangon = delete report[tangon];
            _fun00010_ip = 213; continue _fun00009;
 200:
            michal = _closure1_slot2;
            entity = entity.type;
            michal[entity] = zuuluu;
 213:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    oscard = {};
    report = true;
    oscard['value'] = report;
    report = '__esModule';
    report = golfie.bind(option)(zuuluu, report, oscard);
    oscard = entity.Set;
    entity = oscard.prototype;
    romeon = Object.create(entity, {constructor: {value: oscard}});
    yankee = ['CHANNEL_SELECT', 'CHANNEL_PRELOAD', 'MESSAGE_CREATE'];
    entity = new romeon[oscard](yankee, offset);
    entity = {};
    var _closure1_slot2 = entity;
    entity = false;
    var _closure1_slot3 = entity;
    entity = 1;
    report = tangon[entity];
    tangon = argBar;
    entity = undefined;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/app_startup/ManagerRegistryShared.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: initialize
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            option = argFoo;
            oscard = option;
            entity = undefined;
            for(zuuluu in oscard)
 19:
            {
 28:
                verify = zuuluu;
                offset = option[verify];
                verify = _closure1_slot6;
                verify = verify.bind(entity)(entity, offset);
                verify = _closure1_slot7;
                verify = verify.bind(entity)(offset);
                _fun00012_ip = 19; continue _fun00011;
            }
 56:
            tangon = _closure1_slot0;
            report = _closure1_slot1;
            zuuluu = 0;
            zuuluu = report[zuuluu];
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.addInterceptor;
            michal = _closure1_slot8;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    zuuluu['initialize'] = michal;
    return entity;
})();