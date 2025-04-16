// app/modules/quests/native/QuestContentImpressionTracker.native.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
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
            verify = _closure1_slot11;
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
            golfie = _closure1_slot11;
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
    var _closure1_slot10 = entity;
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
    var _closure1_slot11 = entity;
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
    var _closure1_slot3 = tangon;
    tangon = 1;
    option = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AppStates;
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot7 = tangon;
    tangon = function(argFoo) { // Original name: calculateVisibilityPercentage
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            michal = entity.visibilityRef;
            zuuluu = entity.quest;
            tangon = null;
            report = tangon == michal;
            entity = undefined;
            if(report) { _fun00008_ip = 63; continue _fun00007 }
 26:
            report = michal.current;
            oscard = tangon == report;
            entity = undefined;
            if(oscard) { _fun00008_ip = 63; continue _fun00007 }
 40:
            report = report.children;
            oscard = tangon == report;
            entity = undefined;
            if(oscard) { _fun00008_ip = 63; continue _fun00007 }
 54:
            zuuluu = zuuluu.id;
            entity = report[zuuluu];
 63:
            report = tangon == entity;
            zuuluu = undefined;
            if(report) { _fun00008_ip = 78; continue _fun00007 }
 72:
            zuuluu = entity.layout;
 78:
            if(!(tangon != zuuluu)) { _fun00008_ip = 397; continue _fun00007 }
 85:
            report = tangon == michal;
            zuuluu = undefined;
            if(report) { _fun00008_ip = 119; continue _fun00007 }
 94:
            report = michal.current;
            report = report.parent;
            oscard = tangon == report;
            zuuluu = undefined;
            if(oscard) { _fun00008_ip = 119; continue _fun00007 }
 113:
            zuuluu = report.layout;
 119:
            if(!(tangon != zuuluu)) { _fun00008_ip = 397; continue _fun00007 }
 126:
            report = tangon == michal;
            zuuluu = undefined;
            if(report) { _fun00008_ip = 160; continue _fun00007 }
 135:
            report = michal.current;
            report = report.parent;
            oscard = tangon == report;
            zuuluu = undefined;
            if(oscard) { _fun00008_ip = 160; continue _fun00007 }
 154:
            zuuluu = report.scrollY;
 160:
            if(!(tangon != zuuluu)) { _fun00008_ip = 397; continue _fun00007 }
 167:
            zuuluu = entity.layout;
            zuuluu = zuuluu.y;
            report = new Array(2);
            report[0] = zuuluu;
            zuuluu = entity.layout;
            tangon = zuuluu.y;
            zuuluu = entity.layout;
            zuuluu = zuuluu.height;
            zuuluu = tangon + zuuluu;
            report[1] = zuuluu;
            zuuluu = michal.current;
            zuuluu = zuuluu.parent;
            tangon = zuuluu.scrollY;
            zuuluu = new Array(2);
            zuuluu[0] = tangon;
            tangon = michal.current;
            tangon = tangon.parent;
            tangon = tangon.scrollY;
            michal = michal.current;
            michal = michal.parent;
            michal = michal.layout;
            michal = michal.height;
            michal = tangon + michal;
            zuuluu[1] = michal;
            michal = global;
            verify = michal.Math;
            option = verify.max;
            golfie = 0;
            oscard = report[golfie];
            tangon = zuuluu[golfie];
            option = option.bind(verify)(oscard, tangon);
            verify = michal.Math;
            oscard = verify.min;
            tangon = 1;
            report = report[tangon];
            zuuluu = zuuluu[tangon];
            zuuluu = oscard.bind(verify)(report, zuuluu);
            oscard = michal.Math;
            report = oscard.max;
            zuuluu = zuuluu - option;
            report = report.bind(oscard)(golfie, zuuluu);
            zuuluu = michal.Math;
            michal = zuuluu.min;
            entity = entity.layout;
            entity = entity.height;
            entity = report / entity;
            entity = michal.bind(zuuluu)(entity, tangon);
            return entity;
 397:
            entity = 0;
            return entity;
        }
    };
    var _closure1_slot8 = tangon;
    tangon = function(argFoo) { // Original name: useVisibilityData
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            michal = argFoo;
            golfie = michal.questOrQuests;
            entity = michal.visibilityRef;
            zuuluu = michal.overrideVisibility;
            oscard = _closure1_slot4;
            tangon = oscard.useState;
            report = 0;
            verify = tangon.bind(oscard)(report);
            option = _closure1_slot3;
            tangon = undefined;
            oscard = 2;
            option = option.bind(tangon)(verify, oscard);
            report = option[report];
            oscard = {};
            oscard['questOrQuests'] = golfie;
            golfie = 1;
            golfie = option[golfie];
            oscard['setVisibilityPercentage'] = golfie;
            oscard['visibilityRef'] = entity;
            entity = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    michal = argFoo;
                    tangon = michal.questOrQuests;
                    zuuluu = michal.setVisibilityPercentage;
                    var _closure3_slot0 = zuuluu;
                    zuuluu = michal.visibilityRef;
                    var _closure3_slot1 = zuuluu;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00012_ip = 130; continue _fun00011 }
 37:
                    report = function(argFoo) { // Original name: _loop
                        report = argFoo;
                        var _closure4_slot0 = report;
                        oscard = _closure3_slot1;
                        entity = oscard.current;
                        zuuluu = entity.children;
                        michal = report.id;
                        entity = {};
                        oscard = oscard.current;
                        oscard = oscard.children;
                        report = report.id;
                        golfie = oscard[report];
                        option = entity;
                        report = copyDataProperties(option, golfie);
                        report = function() { // Original name: calculateVisibility
                            zuuluu = _closure3_slot0;
                            tangon = _closure1_slot8;
                            entity = {};
                            michal = _closure3_slot1;
                            entity['visibilityRef'] = michal;
                            michal = _closure4_slot0;
                            entity['quest'] = michal;
                            michal = undefined;
                            entity = tangon.bind(michal)(entity);
                            entity = zuuluu.bind(michal)(entity);
                            return entity;
                        };
                        tangon = 'calculateVisibility';
                        entity[tangon] = report;
                        zuuluu[michal] = entity;
                        entity = undefined;
                        return entity;
                    };
                    michal = _closure1_slot10;
                    entity = global;
                    zuuluu = entity.Array;
                    entity = zuuluu.isArray;
                    zuuluu = entity.bind(zuuluu)(tangon);
                    entity = tangon;
                    if(zuuluu) { _fun00012_ip = 86; continue _fun00011 }
 75:
                    zuuluu = new Array(1);
                    zuuluu[0] = tangon;
                    entity = zuuluu;
 86:
                    tangon = undefined;
                    zuuluu = michal.bind(tangon)(entity);
                    michal = zuuluu.bind(tangon)();
                    entity = michal.done;
                    if(entity) { _fun00012_ip = 130; continue _fun00011 }
 105:
                    entity = michal.value;
                    entity = report.bind(tangon)(entity);
                    oscard = zuuluu.bind(tangon)();
                    entity = oscard.done;
                    michal = oscard;
                    if(!entity) { _fun00012_ip = 105; continue _fun00011 }
 130:
                    entity = undefined;
                    return entity;
                }
            };
            entity = entity.bind(tangon)(oscard);
            entity = null;
            if(!(entity == zuuluu)) { _fun00010_ip = 133; continue _fun00009 }
 103:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 5;
            entity = golfie[entity];
            entity = oscard.bind(tangon)(entity);
            entity = entity.MIN_QUEST_CONTENT_VISIBILITY_PERCENTAGE;
            zuuluu = report >= entity;
 133:
            entity = {};
            entity['visible'] = zuuluu;
            report = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 6;
            michal = oscard[michal];
            michal = report.bind(tangon)(michal);
            michal = michal.bind(tangon)(zuuluu);
            michal = zuuluu !== michal;
            entity['visibleChanged'] = michal;
            return entity;
        }
    };
    var _closure1_slot9 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/quests/native/QuestContentImpressionTracker.native.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: QuestContentImpressionTrackerNative
        entity = argFoo;
        golfie = _closure1_slot0;
        option = _closure1_slot2;
        zuuluu = 7;
        zuuluu = option[zuuluu];
        report = undefined;
        verify = golfie.bind(report)(zuuluu);
        oscard = verify.useStateFromStores;
        zuuluu = _closure1_slot5;
        tangon = new Array(1);
        tangon[0] = zuuluu;
        zuuluu = function() {
            michal = _closure1_slot5;
            entity = michal.getState;
            entity = entity.bind(michal)();
            return entity;
        };
        tangon = oscard.bind(verify)(tangon, zuuluu);
        zuuluu = _closure1_slot6;
        zuuluu = zuuluu.ACTIVE;
        yankee = tangon === zuuluu;
        oscard = _closure1_slot4;
        tangon = oscard.useRef;
        zuuluu = null;
        offset = tangon.bind(oscard)(zuuluu);
        zuuluu = _closure1_slot9;
        romeon = zuuluu.bind(report)(entity);
        tangon = _closure1_slot1;
        zuuluu = 6;
        zuuluu = option[zuuluu];
        zuuluu = tangon.bind(report)(zuuluu);
        verify = zuuluu.bind(report)(yankee);
        tangon = _closure1_slot7;
        oscard = 5;
        michal = option[oscard];
        michal = golfie.bind(report)(michal);
        zuuluu = michal.QuestContentImpressionTrackerInner;
        michal = {};
        sizing = michal;
        kiloes = entity;
        foxtra = copyDataProperties(sizing, kiloes);
        sizing = michal;
        kiloes = romeon;
        romeon = copyDataProperties(sizing, kiloes);
        romeon = 'focused';
        michal[romeon] = yankee;
        yankee = yankee !== verify;
        verify = 'focusedChanged';
        michal[verify] = yankee;
        verify = 'reference';
        michal[verify] = offset;
        oscard = option[oscard];
        option = golfie.bind(report)(oscard);
        golfie = option.getQuestContentImpressionTrackerKey;
        oscard = entity.questOrQuests;
        entity = entity.questContent;
        entity = golfie.bind(option)(oscard, entity);
        entity = tangon.bind(report)(zuuluu, michal, entity);
        return entity;
    };
    zuuluu['QuestContentImpressionTrackerNative'] = michal;
    return entity;
})();