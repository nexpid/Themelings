// app/modules/quests/native/QuestContentImpressionTracker.native.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun91246: for(var _fun91246_ip = 0; ; ) switch(_fun91246_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun91246_ip = 46; continue _fun91246 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun91246_ip = 55; continue _fun91246 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun91246_ip = 345; continue _fun91246 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun91246_ip = 323; continue _fun91246 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun91246_ip = 283; continue _fun91246 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun91246_ip = 270; continue _fun91246 }
 110:
            golf = {};
            verify = golf.toString;
            golf = verify.call;
            yankee = golf.bind(verify)(zulu);
            offset = yankee.slice;
            verify = 8;
            golf = -1;
            verify = offset.bind(yankee)(verify, golf);
            golf = 'Object';
            golf = golf === verify;
            if(!golf) { _fun91246_ip = 163; continue _fun91246 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun91246_ip = 179; continue _fun91246 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun91246_ip = 249; continue _fun91246 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun91246_ip = 249; continue _fun91246 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun91246_ip = 234; continue _fun91246 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun91246_ip = 247; continue _fun91246 }
 234:
            verify = _closure1_slot11;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun91246_ip = 265; continue _fun91246;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun91246_ip = 283; continue _fun91246;
 270:
            golf = _closure1_slot11;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun91246_ip = 323; continue _fun91246 }
 289:
            golf = report.TypeError;
            report = golf.prototype;
            oscar = Object.create(report, {constructor: {value: golf}});
            foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscar;
            report = new backup[golf](foxtrot, romeo);
            report = report instanceof Object ? report : oscar;
            throw report;
 323:
            if(!tango) { _fun91246_ip = 330; continue _fun91246 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun91247: for(var _fun91247_ip = 0; ; ) switch(_fun91247_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun91247_ip = 56; continue _fun91247 }
 20:
                    entity = {};
                    mike = false;
                    entity['done'] = mike;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = parseFloat(mike);
                    tango = mike + 1;
                    _closure2_slot1 = tango;
                    mike = zulu[mike];
                    entity['value'] = mike;
                    _fun91247_ip = 67; continue _fun91247;
 56:
                    mike = {};
                    zulu = true;
                    mike['done'] = zulu;
                    entity = mike;
 67:
                    return entity;
                }
            };
            return entity;
 345:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun91248: for(var _fun91248_ip = 0; ; ) switch(_fun91248_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun91248_ip = 23; continue _fun91248 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun91248_ip = 33; continue _fun91248 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun91248_ip = 70; continue _fun91248 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun91248_ip = 55; continue _fun91248 }
 70:
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    options = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(options);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.AppStates;
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot7 = tango;
    tango = function(argFoo) { // Original name: calculateVisibilityPercentage
        _fun91249: for(var _fun91249_ip = 0; ; ) switch(_fun91249_ip) {
 0:
            entity = argFoo;
            mike = entity.visibilityRef;
            zulu = entity.quest;
            tango = null;
            report = tango == mike;
            entity = undefined;
            if(report) { _fun91249_ip = 63; continue _fun91249 }
 26:
            report = mike.current;
            oscar = tango == report;
            entity = undefined;
            if(oscar) { _fun91249_ip = 63; continue _fun91249 }
 40:
            report = report.children;
            oscar = tango == report;
            entity = undefined;
            if(oscar) { _fun91249_ip = 63; continue _fun91249 }
 54:
            zulu = zulu.id;
            entity = report[zulu];
 63:
            report = tango == entity;
            zulu = undefined;
            if(report) { _fun91249_ip = 78; continue _fun91249 }
 72:
            zulu = entity.layout;
 78:
            if(!(tango != zulu)) { _fun91249_ip = 397; continue _fun91249 }
 85:
            report = tango == mike;
            zulu = undefined;
            if(report) { _fun91249_ip = 119; continue _fun91249 }
 94:
            report = mike.current;
            report = report.parent;
            oscar = tango == report;
            zulu = undefined;
            if(oscar) { _fun91249_ip = 119; continue _fun91249 }
 113:
            zulu = report.layout;
 119:
            if(!(tango != zulu)) { _fun91249_ip = 397; continue _fun91249 }
 126:
            report = tango == mike;
            zulu = undefined;
            if(report) { _fun91249_ip = 160; continue _fun91249 }
 135:
            report = mike.current;
            report = report.parent;
            oscar = tango == report;
            zulu = undefined;
            if(oscar) { _fun91249_ip = 160; continue _fun91249 }
 154:
            zulu = report.scrollY;
 160:
            if(!(tango != zulu)) { _fun91249_ip = 397; continue _fun91249 }
 167:
            zulu = entity.layout;
            zulu = zulu.y;
            report = new Array(2);
            report[0] = zulu;
            zulu = entity.layout;
            tango = zulu.y;
            zulu = entity.layout;
            zulu = zulu.height;
            zulu = tango + zulu;
            report[1] = zulu;
            zulu = mike.current;
            zulu = zulu.parent;
            tango = zulu.scrollY;
            zulu = new Array(2);
            zulu[0] = tango;
            tango = mike.current;
            tango = tango.parent;
            tango = tango.scrollY;
            mike = mike.current;
            mike = mike.parent;
            mike = mike.layout;
            mike = mike.height;
            mike = tango + mike;
            zulu[1] = mike;
            mike = global;
            verify = mike.Math;
            options = verify.max;
            golf = 0;
            oscar = report[golf];
            tango = zulu[golf];
            options = options.bind(verify)(oscar, tango);
            verify = mike.Math;
            oscar = verify.min;
            tango = 1;
            report = report[tango];
            zulu = zulu[tango];
            zulu = oscar.bind(verify)(report, zulu);
            oscar = mike.Math;
            report = oscar.max;
            zulu = zulu - options;
            report = report.bind(oscar)(golf, zulu);
            zulu = mike.Math;
            mike = zulu.min;
            entity = entity.layout;
            entity = entity.height;
            entity = report / entity;
            entity = mike.bind(zulu)(entity, tango);
            return entity;
 397:
            entity = 0;
            return entity;
        }
    };
    var _closure1_slot8 = tango;
    tango = function(argFoo) { // Original name: useVisibilityData
        _fun91250: for(var _fun91250_ip = 0; ; ) switch(_fun91250_ip) {
 0:
            mike = argFoo;
            golf = mike.questOrQuests;
            entity = mike.visibilityRef;
            zulu = mike.overrideVisibility;
            oscar = _closure1_slot4;
            tango = oscar.useState;
            report = 0;
            verify = tango.bind(oscar)(report);
            options = _closure1_slot3;
            tango = undefined;
            oscar = 2;
            options = options.bind(tango)(verify, oscar);
            report = options[report];
            oscar = {};
            oscar['questOrQuests'] = golf;
            golf = 1;
            golf = options[golf];
            oscar['setVisibilityPercentage'] = golf;
            oscar['visibilityRef'] = entity;
            entity = function(argFoo) {
                _fun91251: for(var _fun91251_ip = 0; ; ) switch(_fun91251_ip) {
 0:
                    mike = argFoo;
                    tango = mike.questOrQuests;
                    zulu = mike.setVisibilityPercentage;
                    var _closure3_slot0 = zulu;
                    zulu = mike.visibilityRef;
                    var _closure3_slot1 = zulu;
                    mike = null;
                    if(!(mike != zulu)) { _fun91251_ip = 130; continue _fun91251 }
 37:
                    report = function(argFoo) { // Original name: _loop
                        report = argFoo;
                        var _closure4_slot0 = report;
                        oscar = _closure3_slot1;
                        entity = oscar.current;
                        zulu = entity.children;
                        mike = report.id;
                        entity = {};
                        oscar = oscar.current;
                        oscar = oscar.children;
                        report = report.id;
                        golf = oscar[report];
                        options = entity;
                        report = copyDataProperties(options, golf);
                        report = function() { // Original name: calculateVisibility
                            zulu = _closure3_slot0;
                            tango = _closure1_slot8;
                            entity = {};
                            mike = _closure3_slot1;
                            entity['visibilityRef'] = mike;
                            mike = _closure4_slot0;
                            entity['quest'] = mike;
                            mike = undefined;
                            entity = tango.bind(mike)(entity);
                            entity = zulu.bind(mike)(entity);
                            return entity;
                        };
                        tango = 'calculateVisibility';
                        entity[tango] = report;
                        zulu[mike] = entity;
                        entity = undefined;
                        return entity;
                    };
                    mike = _closure1_slot10;
                    entity = global;
                    zulu = entity.Array;
                    entity = zulu.isArray;
                    zulu = entity.bind(zulu)(tango);
                    entity = tango;
                    if(zulu) { _fun91251_ip = 86; continue _fun91251 }
 75:
                    zulu = new Array(1);
                    zulu[0] = tango;
                    entity = zulu;
 86:
                    tango = undefined;
                    zulu = mike.bind(tango)(entity);
                    mike = zulu.bind(tango)();
                    entity = mike.done;
                    if(entity) { _fun91251_ip = 130; continue _fun91251 }
 105:
                    entity = mike.value;
                    entity = report.bind(tango)(entity);
                    oscar = zulu.bind(tango)();
                    entity = oscar.done;
                    mike = oscar;
                    if(!entity) { _fun91251_ip = 105; continue _fun91251 }
 130:
                    entity = undefined;
                    return entity;
                }
            };
            entity = entity.bind(tango)(oscar);
            entity = null;
            if(!(entity == zulu)) { _fun91250_ip = 133; continue _fun91250 }
 103:
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            entity = 5;
            entity = golf[entity];
            entity = oscar.bind(tango)(entity);
            entity = entity.MIN_QUEST_CONTENT_VISIBILITY_PERCENTAGE;
            zulu = report >= entity;
 133:
            entity = {};
            entity['visible'] = zulu;
            report = _closure1_slot1;
            oscar = _closure1_slot2;
            mike = 6;
            mike = oscar[mike];
            mike = report.bind(tango)(mike);
            mike = mike.bind(tango)(zulu);
            mike = zulu !== mike;
            entity['visibleChanged'] = mike;
            return entity;
        }
    };
    var _closure1_slot9 = tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/quests/native/QuestContentImpressionTracker.native.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: QuestContentImpressionTrackerNative
        entity = argFoo;
        golf = _closure1_slot0;
        options = _closure1_slot2;
        zulu = 7;
        zulu = options[zulu];
        report = undefined;
        verify = golf.bind(report)(zulu);
        oscar = verify.useStateFromStores;
        zulu = _closure1_slot5;
        tango = new Array(1);
        tango[0] = zulu;
        zulu = function() {
            mike = _closure1_slot5;
            entity = mike.getState;
            entity = entity.bind(mike)();
            return entity;
        };
        tango = oscar.bind(verify)(tango, zulu);
        zulu = _closure1_slot6;
        zulu = zulu.ACTIVE;
        tango = tango === zulu;
        verify = {};
        foxtrot = verify;
        romeo = entity;
        zulu = copyDataProperties(foxtrot, romeo);
        zulu = _closure1_slot9;
        romeo = zulu.bind(report)(entity);
        foxtrot = verify;
        zulu = copyDataProperties(foxtrot, romeo);
        zulu = 'focused';
        verify[zulu] = tango;
        oscar = _closure1_slot1;
        zulu = 6;
        zulu = options[zulu];
        zulu = oscar.bind(report)(zulu);
        zulu = zulu.bind(report)(tango);
        tango = tango !== zulu;
        zulu = 'focusedChanged';
        verify[zulu] = tango;
        oscar = _closure1_slot4;
        zulu = oscar.useRef;
        tango = null;
        offset = zulu.bind(oscar)(tango);
        zulu = 'reference';
        verify[zulu] = offset;
        zulu = oscar.useRef;
        tango = zulu.bind(oscar)(tango);
        zulu = 'impression';
        verify[zulu] = tango;
        tango = _closure1_slot7;
        oscar = 5;
        mike = options[oscar];
        mike = golf.bind(report)(mike);
        zulu = mike.QuestContentImpressionTrackerInner;
        mike = {};
        foxtrot = mike;
        romeo = verify;
        verify = copyDataProperties(foxtrot, romeo);
        oscar = options[oscar];
        options = golf.bind(report)(oscar);
        golf = options.getQuestContentImpressionTrackerKey;
        oscar = entity.questOrQuests;
        entity = entity.questContent;
        entity = golf.bind(options)(oscar, entity);
        entity = tango.bind(report)(zulu, mike, entity);
        return entity;
    };
    zulu['QuestContentImpressionTrackerNative'] = mike;
    return entity;
})();