// app/modules/content_inventory/ContentInventoryPersistedStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot3;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot2;
            entity = _closure1_slot17;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, oscard);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golfie = global;
            option = golfie.Reflect;
            golfie = option.construct;
            if(oscard) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscard = new Array(0);
 71:
            report = _closure1_slot3;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 72: // try_end0
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot17 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00006_ip = 46; continue _fun00005 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 46:
            if(michal) { _fun00006_ip = 55; continue _fun00005 }
 49:
            michal = zuuluu.@@iterator;
 55:
            if(michal) { _fun00006_ip = 345; continue _fun00005 }
 61:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00006_ip = 323; continue _fun00005 }
 86:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00006_ip = 283; continue _fun00005 }
 96:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00006_ip = 270; continue _fun00005 }
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
            if(!golfie) { _fun00006_ip = 163; continue _fun00005 }
 158:
            golfie = zuuluu.constructor;
 163:
            offset = verify;
            if(!golfie) { _fun00006_ip = 179; continue _fun00005 }
 169:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 179:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00006_ip = 249; continue _fun00005 }
 187:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00006_ip = 249; continue _fun00005 }
 195:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00006_ip = 234; continue _fun00005 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00006_ip = 247; continue _fun00005 }
 234:
            verify = _closure1_slot19;
            golfie = verify.bind(option)(zuuluu, option);
 247:
            _fun00006_ip = 265; continue _fun00005;
 249:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 265:
            oscard = golfie;
            _fun00006_ip = 283; continue _fun00005;
 270:
            golfie = _closure1_slot19;
            oscard = golfie.bind(option)(zuuluu, option);
 283:
            tangon = oscard;
            if(tangon) { _fun00006_ip = 323; continue _fun00005 }
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
            if(!tangon) { _fun00006_ip = 330; continue _fun00005 }
 326:
            _closure2_slot0 = tangon;
 330:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00008_ip = 56; continue _fun00007 }
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
                    _fun00008_ip = 67; continue _fun00007;
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
    var _closure1_slot18 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00010_ip = 23; continue _fun00009 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00010_ip = 33; continue _fun00009 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00010_ip = 70; continue _fun00009 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00010_ip = 55; continue _fun00009 }
 70:
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function() { // Original name: updateImpressionCaches
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            michal = arguments[0];
            entity = undefined;
            if(!(michal === entity)) { _fun00012_ip = 11; continue _fun00011 }
 9:
            michal = false;
 11:
            if(michal) { _fun00012_ip = 45; continue _fun00011 }
 14:
            michal = global;
            zuuluu = michal.Date;
            michal = zuuluu.now;
            zuuluu = michal.bind(zuuluu)();
            michal = _closure1_slot12;
            if(!(!(zuuluu < michal))) { _fun00012_ip = 509; continue _fun00011 }
 45:
            tangon = global;
            zuuluu = tangon.Date;
            michal = zuuluu.now;
            report = michal.bind(zuuluu)();
            michal = _closure1_slot6;
            option = report - michal;
            michal = _closure1_slot9;
            michal = michal.itemImpressions;
            michal = michal.length;
            kiloes = 0;
            michal = kiloes < michal;
            backup = 1;
            foxtra = 2;
            oscard = 0;
            report = 0;
            golfie = 0;
            if(!michal) { _fun00012_ip = 177; continue _fun00011 }
 109:
            verify = _closure1_slot5;
            michal = _closure1_slot9;
            michal = michal.itemImpressions;
            michal = michal[report];
            michal = verify.bind(entity)(michal, foxtra);
            verify = michal[kiloes];
            michal = michal[backup];
            golfie = oscard;
            if(!(michal < option)) { _fun00012_ip = 177; continue _fun00011 }
 148:
            oscard = report + backup;
            report = report + 1;
            michal = _closure1_slot9;
            michal = michal.itemImpressions;
            michal = michal.length;
            golfie = oscard;
            if(report < michal) { _fun00012_ip = 109; continue _fun00011 }
 177:
            if(!(golfie > kiloes)) { _fun00012_ip = 207; continue _fun00011 }
 181:
            report = _closure1_slot9;
            oscard = report.itemImpressions;
            michal = oscard.slice;
            michal = michal.bind(oscard)(golfie);
            report['itemImpressions'] = michal;
 207:
            michal = _closure1_slot9;
            michal = michal.itemImpressions;
            report = michal.length;
            michal = _closure1_slot8;
            if(!(report > michal)) { _fun00012_ip = 262; continue _fun00011 }
 230:
            report = _closure1_slot9;
            golfie = report.itemImpressions;
            oscard = golfie.slice;
            michal = -2048;
            michal = oscard.bind(golfie)(michal);
            report['itemImpressions'] = michal;
 262:
            michal = _closure1_slot14;
            if(michal) { _fun00012_ip = 275; continue _fun00011 }
 269:
            romeon = _closure1_slot7;
            _fun00012_ip = 279; continue _fun00011;
 275:
            romeon = _closure1_slot15;
 279:
            michal = tangon.Set;
            report = michal.prototype;
            report = Object.create(report, {constructor: {value: michal}});
            source = report;
            michal = new source[michal](update);
            oscard = michal instanceof Object ? michal : report;
            michal = tangon.Set;
            report = michal.prototype;
            report = Object.create(report, {constructor: {value: michal}});
            source = report;
            michal = new source[michal](update);
            michal = michal instanceof Object ? michal : report;
            report = tangon.Date;
            tangon = report.now;
            tangon = tangon.bind(report)();
            yankee = tangon - romeon;
            report = _closure1_slot18;
            tangon = _closure1_slot9;
            tangon = tangon.itemImpressions;
            offset = report.bind(entity)(tangon);
            tangon = offset.bind(entity)();
            golfie = tangon.done;
            report = null;
            verify = tangon;
            option = null;
            tangon = null;
            if(golfie) { _fun00012_ip = 474; continue _fun00011 }
 390:
            sizing = verify.value;
            golfie = _closure1_slot5;
            golfie = golfie.bind(entity)(sizing, foxtra);
            output = golfie[kiloes];
            golfie = golfie[backup];
            if(!(!(golfie < yankee))) { _fun00012_ip = 430; continue _fun00011 }
 417:
            sizing = option;
            if(!(report == sizing)) { _fun00012_ip = 443; continue _fun00011 }
 424:
            sizing = golfie + romeon;
            _fun00012_ip = 443; continue _fun00011;
 430:
            golfie = oscard.add;
            golfie = golfie.bind(oscard)(output);
            sizing = option;
 443:
            golfie = michal.add;
            golfie = golfie.bind(michal)(output);
            output = offset.bind(entity)();
            golfie = output.done;
            option = sizing;
            verify = output;
            tangon = option;
            if(!golfie) { _fun00012_ip = 390; continue _fun00011 }
 474:
            _closure1_slot10 = oscard;
            _closure1_slot11 = michal;
            michal = inf;
            if(!(report != tangon)) { _fun00012_ip = 499; continue _fun00011 }
 496:
            michal = tangon;
 499:
            _closure1_slot12 = michal;
            michal = true;
            _closure1_slot13 = michal;
 509:
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    option = global;
    verify = option.Object;
    golfie = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, michal);
    golfie = 0;
    michal = report[golfie];
    entity = undefined;
    michal = oscard.bind(entity)(michal);
    var _closure1_slot0 = michal;
    michal = 1;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot1 = michal;
    michal = 2;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot2 = michal;
    verify = 3;
    michal = report[verify];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 4;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 5;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 2592000000.0;
    var _closure1_slot6 = michal;
    michal = 6;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    michal = michal.Millis;
    michal = michal.DAY;
    michal = verify * michal;
    var _closure1_slot7 = michal;
    michal = 2048;
    var _closure1_slot8 = michal;
    verify = {};
    michal = new Array(0);
    verify['itemImpressions'] = michal;
    michal = false;
    verify['hidden'] = michal;
    var _closure1_slot9 = verify;
    verify = option.Set;
    offset = verify.prototype;
    offset = Object.create(offset, {constructor: {value: verify}});
    backup = offset;
    verify = new backup[verify](foxtra);
    verify = verify instanceof Object ? verify : offset;
    var _closure1_slot10 = verify;
    option = option.Set;
    verify = option.prototype;
    verify = Object.create(verify, {constructor: {value: option}});
    backup = verify;
    option = new backup[option](foxtra);
    option = option instanceof Object ? option : verify;
    var _closure1_slot11 = option;
    var _closure1_slot12 = golfie;
    var _closure1_slot13 = michal;
    var _closure1_slot14 = michal;
    michal = 1000;
    var _closure1_slot15 = michal;
    michal = 7;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    golfie = michal.PersistedStore;
    michal = function(argFoo) {
        tangon = function() { // Original name: ContentInventoryPersistedStore
            report = this;
            tangon = undefined;
            entity = undefined;
            oscard = _closure1_slot0;
            zuuluu = _closure2_slot0;
            oscard = oscard.bind(tangon)(report, zuuluu);
            michal = _closure1_slot16;
            entity = arguments;
            entity = michal.bind(tangon)(report, zuuluu, entity);
            return entity;
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot4;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot1;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                zuuluu = argFoo;
                michal = {};
                report = _closure1_slot9;
                oscard = michal;
                tangon = copyDataProperties(oscard, report);
                tangon = null;
                if(!(tangon == zuuluu)) { _fun00014_ip = 27; continue _fun00013 }
 25:
                zuuluu = {};
 27:
                oscard = michal;
                report = zuuluu;
                zuuluu = copyDataProperties(oscard, report);
                _closure1_slot9 = michal;
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(6);
        entity[0] = report;
        report = {};
        golfie = 'getState';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot9;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getImpressionCappedItemIds';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            zuuluu = _closure1_slot20;
            michal = undefined;
            michal = zuuluu.bind(michal)();
            entity = _closure1_slot10;
            return entity;
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'getDebugFastImpressionCappingEnabled';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot14;
            return entity;
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'hidden';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot9;
            entity = entity.hidden;
            return entity;
        };
        report['get'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'reset';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            michal = {};
            entity = new Array(0);
            michal['itemImpressions'] = entity;
            entity = false;
            michal['hidden'] = entity;
            _closure1_slot9 = michal;
            entity = undefined;
            return entity;
        };
        report['value'] = oscard;
        entity[5] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    golfie = michal.bind(entity)(golfie);
    michal = 'ContentInventoryPersistedStore';
    golfie['displayName'] = michal;
    golfie['persistKey'] = michal;
    michal = 8;
    michal = report[michal];
    foxtra = oscard.bind(entity)(michal);
    michal = {};
    option = function(argFoo) { // Original name: handleImpressionsTracked
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            tangon = entity.itemIds;
            entity = _closure1_slot13;
            if(entity) { _fun00016_ip = 31; continue _fun00015 }
 21:
            zuuluu = _closure1_slot20;
            entity = undefined;
            entity = zuuluu.bind(entity)();
 31:
            entity = global;
            zuuluu = entity.Date;
            entity = zuuluu.now;
            verify = entity.bind(zuuluu)();
            entity = _closure1_slot18;
            zuuluu = undefined;
            option = entity.bind(zuuluu)(tangon);
            report = option.bind(zuuluu)();
            tangon = report.done;
            oscard = report;
            report = false;
            entity = false;
            if(tangon) { _fun00016_ip = 152; continue _fun00015 }
 78:
            romeon = oscard.value;
            offset = _closure1_slot11;
            tangon = offset.has;
            tangon = tangon.bind(offset)(romeon);
            if(tangon) { _fun00016_ip = 134; continue _fun00015 }
 100:
            tangon = _closure1_slot9;
            yankee = tangon.itemImpressions;
            offset = yankee.push;
            tangon = new Array(2);
            tangon[0] = romeon;
            tangon[1] = verify;
            tangon = offset.bind(yankee)(tangon);
            report = true;
 134:
            yankee = option.bind(zuuluu)();
            tangon = yankee.done;
            oscard = yankee;
            entity = report;
            if(!tangon) { _fun00016_ip = 78; continue _fun00015 }
 152:
            michal = _closure1_slot20;
            michal = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    michal['CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS'] = option;
    option = function() { // Original name: handleDebugClearImpressions
        zuuluu = _closure1_slot9;
        michal = new Array(0);
        zuuluu['itemImpressions'] = michal;
        zuuluu = _closure1_slot20;
        entity = undefined;
        michal = true;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    michal['CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS'] = option;
    option = function() { // Original name: handleDebugLogImpressions
        entity = false;
        return entity;
    };
    michal['CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS'] = option;
    option = function() { // Original name: handleDebugToggleFastImpressionCapping
        entity = _closure1_slot14;
        entity = !entity;
        _closure1_slot14 = entity;
        entity = undefined;
        return entity;
    };
    michal['CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING'] = option;
    tangon = function() { // Original name: handleToggleContentInventoryFeedHidden
        michal = _closure1_slot9;
        entity = michal.hidden;
        entity = !entity;
        michal['hidden'] = entity;
        entity = undefined;
        return entity;
    };
    michal['CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN'] = tangon;
    tangon = golfie.prototype;
    tangon = Object.create(tangon, {constructor: {value: golfie}});
    backup = tangon;
    romeon = michal;
    michal = new backup[golfie](foxtra, romeon, yankee);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 9;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/content_inventory/ContentInventoryPersistedStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();