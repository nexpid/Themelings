// app/modules/main_tabs_v2/native/settings/renderer/SettingTreeManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
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
            verify = _closure1_slot7;
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
            golfie = _closure1_slot7;
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
    var _closure1_slot6 = entity;
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
    var _closure1_slot7 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.RendererType;
    var _closure1_slot4 = tangon;
    tangon = function() {
        tangon = _closure1_slot3;
        zuuluu = function() { // Original name: SettingTreeManagerCache
            zuuluu = this;
            tangon = _closure1_slot2;
            michal = _closure2_slot0;
            entity = undefined;
            michal = tangon.bind(entity)(zuuluu, michal);
            michal = {};
            zuuluu['cache'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'get';
        entity['key'] = michal;
        michal = function(argFoo) { // Original name: value
            entity = this;
            michal = entity.cache;
            entity = argFoo;
            entity = michal[entity];
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(3);
        michal[0] = entity;
        entity = {};
        oscard = 'set';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            entity = this;
            zuuluu = entity.cache;
            michal = argBar;
            entity = argFoo;
            zuuluu[entity] = michal;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'clear';
        entity['key'] = oscard;
        report = function() { // Original name: value
            michal = {};
            entity = this;
            entity['cache'] = michal;
            entity = undefined;
            return entity;
        };
        entity['value'] = report;
        michal[2] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    tangon = tangon.bind(entity)();
    var _closure1_slot5 = tangon;
    michal = function() {
        tangon = _closure1_slot3;
        zuuluu = function() { // Original name: SettingTreeManager
            zuuluu = this;
            report = _closure1_slot2;
            tangon = _closure2_slot0;
            entity = undefined;
            tangon = report.bind(entity)(zuuluu, tangon);
            michal = _closure1_slot5;
            tangon = michal.prototype;
            report = Object.create(tangon, {constructor: {value: michal}});
            option = report;
            tangon = new option[michal](golfie);
            tangon = tangon instanceof Object ? tangon : report;
            zuuluu['highestAncestorCache'] = tangon;
            tangon = michal.prototype;
            tangon = Object.create(tangon, {constructor: {value: michal}});
            option = tangon;
            michal = new option[michal](golfie);
            michal = michal instanceof Object ? michal : tangon;
            zuuluu['breadcrumbCache'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'transformParent';
        entity['key'] = michal;
        michal = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tangon = argFoo;
                entity = null;
                michal = entity == tangon;
                if(michal) { _fun00008_ip = 35; continue _fun00007 }
 12:
                report = 'string';
                zuuluu = typeof tangon;
                michal = tangon;
                if(!(report !== zuuluu)) { _fun00008_ip = 32; continue _fun00007 }
 26:
                zuuluu = undefined;
                michal = tangon.bind(zuuluu)();
 32:
                entity = michal;
 35:
                return entity;
            }
        };
        entity['value'] = michal;
        michal = new Array(8);
        michal[0] = entity;
        entity = {};
        oscard = 'validate';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'getAncestors';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                golfie = this;
                entity = new Array(0);
                zuuluu = golfie.transformParent;
                option = _closure1_slot0;
                michal = _closure1_slot1;
                report = 3;
                michal = michal[report];
                tangon = undefined;
                michal = option.bind(tangon)(michal);
                option = michal.SETTING_RENDERER_CONFIG;
                michal = argFoo;
                michal = option[michal];
                michal = michal.parent;
                michal = zuuluu.bind(golfie)(michal);
                zuuluu = null;
                if(!(zuuluu != michal)) { _fun00010_ip = 124; continue _fun00009 }
 67:
                option = entity.push;
                option = option.bind(entity)(michal);
                verify = golfie.transformParent;
                offset = _closure1_slot0;
                option = _closure1_slot1;
                option = option[report];
                option = offset.bind(tangon)(option);
                option = option.SETTING_RENDERER_CONFIG;
                option = option[michal];
                option = option.parent;
                michal = verify.bind(golfie)(option);
                if(zuuluu != michal) { _fun00010_ip = 67; continue _fun00009 }
 124:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = 'isBlocked';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            tangon = argFoo;
            zuuluu = this;
            michal = argBar;
            var _closure3_slot0 = michal;
            michal = zuuluu.getAncestors;
            zuuluu = michal.bind(zuuluu)(tangon);
            michal = zuuluu.push;
            michal = michal.bind(zuuluu)(tangon);
            michal = zuuluu.some;
            entity = function(argFoo) {
                zuuluu = _closure3_slot0;
                michal = zuuluu.has;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity['value'] = oscard;
        michal[3] = entity;
        entity = {};
        oscard = 'getHighestLevelAncestor';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                report = argFoo;
                zuuluu = this;
                michal = zuuluu.highestAncestorCache;
                entity = michal.get;
                entity = entity.bind(michal)(report);
                oscard = null;
                if(!(oscard == entity)) { _fun00012_ip = 84; continue _fun00011 }
 28:
                michal = zuuluu.getAncestors;
                tangon = michal.bind(zuuluu)(report);
                golfie = tangon.length;
                michal = 1;
                michal = golfie - michal;
                tangon = tangon[michal];
                michal = report;
                if(!(oscard != tangon)) { _fun00012_ip = 65; continue _fun00011 }
 62:
                michal = tangon;
 65:
                tangon = zuuluu.highestAncestorCache;
                zuuluu = tangon.set;
                zuuluu = zuuluu.bind(tangon)(report, michal);
                return michal;
 84:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[4] = entity;
        entity = {};
        oscard = 'getNearestRouteAncestorDataOrSelf';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                golfie = argFoo;
                tangon = this;
                zuuluu = _closure1_slot0;
                entity = _closure1_slot1;
                oscard = 3;
                entity = entity[oscard];
                report = undefined;
                entity = zuuluu.bind(report)(entity);
                entity = entity.SETTING_RENDERER_CONFIG;
                entity = entity[golfie];
                option = entity.type;
                zuuluu = _closure1_slot4;
                zuuluu = zuuluu.ROUTE;
                if(!(option !== zuuluu)) { _fun00014_ip = 119; continue _fun00013 }
 60:
                zuuluu = tangon.getAncestors;
                golfie = zuuluu.bind(tangon)(golfie);
                tangon = golfie.find;
                zuuluu = function(argFoo) {
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot1;
                    michal = 3;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    michal = tangon.bind(michal)(zuuluu);
                    zuuluu = michal.SETTING_RENDERER_CONFIG;
                    michal = argFoo;
                    michal = zuuluu[michal];
                    michal = michal.type;
                    entity = _closure1_slot4;
                    entity = entity.ROUTE;
                    entity = michal === entity;
                    return entity;
                };
                zuuluu = tangon.bind(golfie)(zuuluu);
                tangon = _closure1_slot0;
                michal = _closure1_slot1;
                michal = michal[oscard];
                michal = tangon.bind(report)(michal);
                michal = michal.SETTING_RENDERER_CONFIG;
                michal = michal[zuuluu];
                return michal;
 119:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[5] = entity;
        entity = {};
        oscard = 'getBreadcrumbs';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                oscard = argFoo;
                zuuluu = this;
                michal = zuuluu.breadcrumbCache;
                entity = michal.get;
                entity = entity.bind(michal)(oscard);
                romeon = null;
                if(!(romeon == entity)) { _fun00016_ip = 188; continue _fun00015 }
 31:
                michal = new Array(0);
                report = _closure1_slot6;
                tangon = zuuluu.getAncestors;
                tangon = tangon.bind(zuuluu)(oscard);
                offset = undefined;
                verify = report.bind(offset)(tangon);
                report = verify.bind(offset)();
                tangon = report.done;
                option = 'string';
                golfie = 3;
                if(tangon) { _fun00016_ip = 159; continue _fun00015 }
 79:
                foxtra = report.value;
                backup = _closure1_slot0;
                tangon = _closure1_slot1;
                tangon = tangon[golfie];
                tangon = backup.bind(offset)(tangon);
                tangon = tangon.SETTING_RENDERER_CONFIG;
                tangon = tangon[foxtra];
                tangon = tangon.title;
                if(!(romeon != tangon)) { _fun00016_ip = 144; continue _fun00015 }
 120:
                backup = typeof tangon;
                foxtra = tangon;
                if(!(option !== backup)) { _fun00016_ip = 134; continue _fun00015 }
 130:
                foxtra = tangon.bind(offset)();
 134:
                tangon = michal.push;
                tangon = tangon.bind(michal)(foxtra);
 144:
                foxtra = verify.bind(offset)();
                tangon = foxtra.done;
                report = foxtra;
                if(!tangon) { _fun00016_ip = 79; continue _fun00015 }
 159:
                report = zuuluu.breadcrumbCache;
                tangon = report.set;
                zuuluu = michal.reverse;
                zuuluu = zuuluu.bind(michal)();
                zuuluu = tangon.bind(report)(oscard, zuuluu);
                return michal;
 188:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[6] = entity;
        entity = {};
        oscard = 'clearCaches';
        entity['key'] = oscard;
        report = function() { // Original name: value
            entity = this;
            zuuluu = entity.breadcrumbCache;
            michal = zuuluu.clear;
            michal = michal.bind(zuuluu)();
            michal = entity.highestAncestorCache;
            entity = michal.clear;
            entity = entity.bind(michal)();
            entity = undefined;
            return entity;
        };
        entity['value'] = report;
        michal[7] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    foxtra = tangon;
    michal = new foxtra[michal](romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/settings/renderer/SettingTreeManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();