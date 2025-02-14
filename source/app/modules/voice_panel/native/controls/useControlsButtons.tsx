// app/modules/voice_panel/native/controls/useControlsButtons.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun122310: for(var _fun122310_ip = 0; ; ) switch(_fun122310_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun122310_ip = 46; continue _fun122310 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun122310_ip = 55; continue _fun122310 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun122310_ip = 345; continue _fun122310 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun122310_ip = 323; continue _fun122310 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun122310_ip = 283; continue _fun122310 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun122310_ip = 270; continue _fun122310 }
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
            if(!golf) { _fun122310_ip = 163; continue _fun122310 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun122310_ip = 179; continue _fun122310 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun122310_ip = 249; continue _fun122310 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun122310_ip = 249; continue _fun122310 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun122310_ip = 234; continue _fun122310 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun122310_ip = 247; continue _fun122310 }
 234:
            verify = _closure1_slot12;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun122310_ip = 265; continue _fun122310;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun122310_ip = 283; continue _fun122310;
 270:
            golf = _closure1_slot12;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun122310_ip = 323; continue _fun122310 }
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
            if(!tango) { _fun122310_ip = 330; continue _fun122310 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun122311: for(var _fun122311_ip = 0; ; ) switch(_fun122311_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun122311_ip = 56; continue _fun122311 }
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
                    _fun122311_ip = 67; continue _fun122311;
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
    var _closure1_slot11 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun122312: for(var _fun122312_ip = 0; ; ) switch(_fun122312_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun122312_ip = 23; continue _fun122312 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun122312_ip = 33; continue _fun122312 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun122312_ip = 70; continue _fun122312 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun122312_ip = 55; continue _fun122312 }
 70:
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.CONTROLS_BUTTON_SIZE_LARGE;
    var _closure1_slot5 = golf;
    tango = tango.CONTROLS_BUTTON_SIZE_NORMAL;
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.InputModes;
    var _closure1_slot7 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot8 = tango;
    tango = {};
    golf = function(argFoo, argBar) { // Original name: mic
        report = _closure1_slot8;
        mike = _closure1_slot0;
        zulu = _closure1_slot2;
        entity = 5;
        entity = zulu[entity];
        tango = undefined;
        entity = mike.bind(tango)(entity);
        zulu = entity.MicButton;
        mike = {};
        golf = argBar;
        options = mike;
        entity = copyDataProperties(options, golf);
        entity = argFoo;
        entity = report.bind(tango)(zulu, mike, entity);
        return entity;
    };
    tango['mic'] = golf;
    golf = function(argFoo, argBar) { // Original name: ptt
        report = _closure1_slot8;
        mike = _closure1_slot0;
        zulu = _closure1_slot2;
        entity = 5;
        entity = zulu[entity];
        tango = undefined;
        entity = mike.bind(tango)(entity);
        zulu = entity.PTTButton;
        mike = {};
        golf = argBar;
        options = mike;
        entity = copyDataProperties(options, golf);
        entity = argFoo;
        entity = report.bind(tango)(zulu, mike, entity);
        return entity;
    };
    tango['ptt'] = golf;
    golf = function(argFoo, argBar) { // Original name: micConnected
        report = _closure1_slot8;
        mike = _closure1_slot0;
        zulu = _closure1_slot2;
        entity = 5;
        entity = zulu[entity];
        tango = undefined;
        entity = mike.bind(tango)(entity);
        zulu = entity.MicButton;
        mike = {};
        golf = argBar;
        options = mike;
        entity = copyDataProperties(options, golf);
        entity = argFoo;
        entity = report.bind(tango)(zulu, mike, entity);
        return entity;
    };
    tango['micConnected'] = golf;
    golf = function(argFoo, argBar) { // Original name: connect
        report = _closure1_slot8;
        mike = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 6;
        entity = zulu[entity];
        tango = undefined;
        zulu = mike.bind(tango)(entity);
        mike = {};
        golf = argBar;
        options = mike;
        entity = copyDataProperties(options, golf);
        entity = argFoo;
        entity = report.bind(tango)(zulu, mike, entity);
        return entity;
    };
    tango['connect'] = golf;
    golf = function(argFoo, argBar) { // Original name: chat
        report = _closure1_slot8;
        mike = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 7;
        entity = zulu[entity];
        tango = undefined;
        zulu = mike.bind(tango)(entity);
        mike = {};
        golf = argBar;
        options = mike;
        entity = copyDataProperties(options, golf);
        entity = argFoo;
        entity = report.bind(tango)(zulu, mike, entity);
        return entity;
    };
    tango['chat'] = golf;
    golf = function(argFoo, argBar) { // Original name: disconnectCancel
        report = _closure1_slot8;
        mike = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 8;
        entity = zulu[entity];
        tango = undefined;
        zulu = mike.bind(tango)(entity);
        mike = {};
        golf = argBar;
        options = mike;
        entity = copyDataProperties(options, golf);
        entity = argFoo;
        entity = report.bind(tango)(zulu, mike, entity);
        return entity;
    };
    tango['disconnectCancel'] = golf;
    golf = function(argFoo, argBar) { // Original name: video
        report = _closure1_slot8;
        mike = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 9;
        entity = zulu[entity];
        tango = undefined;
        zulu = mike.bind(tango)(entity);
        mike = {};
        golf = argBar;
        options = mike;
        entity = copyDataProperties(options, golf);
        entity = argFoo;
        entity = report.bind(tango)(zulu, mike, entity);
        return entity;
    };
    tango['video'] = golf;
    golf = function(argFoo, argBar) { // Original name: activities
        report = _closure1_slot8;
        mike = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 10;
        entity = zulu[entity];
        tango = undefined;
        zulu = mike.bind(tango)(entity);
        mike = {};
        golf = argBar;
        options = mike;
        entity = copyDataProperties(options, golf);
        entity = argFoo;
        entity = report.bind(tango)(zulu, mike, entity);
        return entity;
    };
    tango['activities'] = golf;
    var _closure1_slot9 = tango;
    tango = {};
    golf = 'function useControlsButtonsTsx1(){const{getControlsDefaultWidth,windowDimensions,safeArea}=this.__closure;return getControlsDefaultWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right);}';
    tango['code'] = golf;
    var _closure1_slot10 = tango;
    tango = 17;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/voice_panel/native/controls/useControlsButtons.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: useControlsButtons
        tango = _closure1_slot3;
        zulu = tango.useContext;
        options = _closure1_slot1;
        verify = _closure1_slot2;
        mike = 11;
        mike = verify[mike];
        report = undefined;
        mike = options.bind(report)(mike);
        mike = zulu.bind(tango)(mike);
        zulu = mike.channelId;
        backup = mike.windowDimensions;
        var _closure2_slot0 = backup;
        foxtrot = mike.safeArea;
        var _closure2_slot1 = foxtrot;
        mike = 12;
        mike = verify[mike];
        mike = options.bind(report)(mike);
        golf = mike.bind(report)(zulu);
        var _closure2_slot2 = golf;
        sizing = _closure1_slot0;
        mike = 13;
        mike = verify[mike];
        offset = sizing.bind(report)(mike);
        oscar = offset.useStateFromStores;
        mike = _closure1_slot4;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = function() {
            zulu = _closure1_slot4;
            mike = zulu.getMode;
            mike = mike.bind(zulu)();
            entity = _closure1_slot7;
            entity = entity.PUSH_TO_TALK;
            entity = mike === entity;
            return entity;
        };
        oscar = oscar.bind(offset)(zulu, mike);
        var _closure2_slot3 = oscar;
        mike = 14;
        mike = verify[mike];
        offset = sizing.bind(report)(mike);
        zulu = offset.useDerivedValue;
        mike = function() { // Original name: n
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 15;
            mike = mike[entity];
            entity = undefined;
            report = zulu.bind(entity)(mike);
            tango = report.getControlsDefaultWidth;
            zulu = _closure2_slot0;
            mike = zulu.get;
            mike = mike.bind(zulu)();
            zulu = mike.width;
            oscar = _closure2_slot1;
            entity = oscar.get;
            entity = entity.bind(oscar)();
            mike = entity.left;
            entity = oscar.get;
            entity = entity.bind(oscar)();
            entity = entity.right;
            entity = tango.bind(report)(zulu, mike, entity);
            return entity;
        };
        romeo = {};
        kilo = 15;
        kilo = verify[kilo];
        kilo = sizing.bind(report)(kilo);
        kilo = kilo.getControlsDefaultWidth;
        romeo['getControlsDefaultWidth'] = kilo;
        romeo['windowDimensions'] = backup;
        romeo['safeArea'] = foxtrot;
        mike['__closure'] = romeo;
        romeo = 16456936876254.0;
        mike['__workletHash'] = romeo;
        yankee = _closure1_slot10;
        mike['__initData'] = yankee;
        zulu = zulu.bind(offset)(mike);
        mike = 16;
        mike = verify[mike];
        mike = options.bind(report)(mike);
        report = mike.bind(report)(zulu);
        var _closure2_slot4 = report;
        zulu = tango.useMemo;
        mike = new Array(3);
        mike[0] = golf;
        mike[1] = oscar;
        mike[2] = report;
        entity = function() {
            _fun122324: for(var _fun122324_ip = 0; ; ) switch(_fun122324_ip) {
 0:
                entity = false;
                var _closure3_slot0 = entity;
                entity = 0;
                var _closure3_slot1 = entity;
                mike = _closure2_slot2;
                entity = _closure2_slot3;
                tango = new Array(0);
                oscar = tango.push;
                if(mike) { _fun122324_ip = 149; continue _fun122324 }
 37:
                mike = {'type': 'icon-normal', 'key': 'disconnected-mute'};
                golf = _closure1_slot9;
                report = golf.mic;
                mike['render'] = report;
                mike = oscar.bind(tango)(mike);
                report = tango.push;
                mike = {'type': 'label', 'key': 'disconnected-connect'};
                options = golf.connect;
                mike['render'] = options;
                mike = report.bind(tango)(mike);
                report = tango.push;
                mike = {'type': 'icon-normal', 'key': 'disconnected-chat'};
                golf = golf.chat;
                mike['render'] = golf;
                mike = report.bind(tango)(mike);
                _fun122324_ip = 383; continue _fun122324;
 149:
                mike = {'type': 'icon-normal', 'key': 'connected-video'};
                golf = _closure1_slot9;
                golf = golf.video;
                mike['render'] = golf;
                mike = oscar.bind(tango)(mike);
                if(entity) { _fun122324_ip = 228; continue _fun122324 }
 189:
                oscar = tango.push;
                mike = {'type': 'icon-normal', 'key': 'connected-mic'};
                golf = _closure1_slot9;
                golf = golf.micConnected;
                mike['render'] = golf;
                mike = oscar.bind(tango)(mike);
 228:
                oscar = tango.push;
                mike = {'type': 'icon-normal', 'key': 'connected-chat'};
                golf = _closure1_slot9;
                golf = golf.chat;
                mike['render'] = golf;
                mike = oscar.bind(tango)(mike);
                if(!entity) { _fun122324_ip = 309; continue _fun122324 }
 270:
                mike = tango.push;
                entity = {'type': 'icon-large', 'key': 'connected-ptt'};
                oscar = _closure1_slot9;
                oscar = oscar.ptt;
                entity['render'] = oscar;
                entity = mike.bind(tango)(entity);
 309:
                mike = tango.push;
                entity = {'type': 'icon-normal', 'key': 'connected-activities'};
                report = _closure1_slot9;
                oscar = report.activities;
                entity['render'] = oscar;
                entity = mike.bind(tango)(entity);
                mike = tango.push;
                entity = {'type': 'icon-normal', 'key': 'connected-disconnect'};
                report = report.disconnectCancel;
                entity['render'] = report;
                entity = mike.bind(tango)(entity);
 383:
                mike = tango.map;
                entity = function(argFoo) {
                    _fun122325: for(var _fun122325_ip = 0; ; ) switch(_fun122325_ip) {
 0:
                        zulu = argFoo;
                        entity = zulu.type;
                        report = 'label';
                        if(!(report === entity)) { _fun122325_ip = 25; continue _fun122325 }
 16:
                        entity = true;
                        _closure3_slot0 = entity;
 25:
                        mike = _closure1_slot6;
                        oscar = zulu.type;
                        tango = 'icon-large';
                        if(!(tango === oscar)) { _fun122325_ip = 69; continue _fun122325 }
 47:
                        golf = _closure3_slot1;
                        tango = 1;
                        tango = golf + tango;
                        _closure3_slot1 = tango;
                        mike = _closure1_slot5;
 69:
                        entity = {};
                        verify = entity;
                        options = zulu;
                        tango = copyDataProperties(verify, options);
                        tango = 'height';
                        entity[tango] = mike;
                        tango = zulu.type;
                        zulu = -1;
                        if(!(report !== tango)) { _fun122325_ip = 108; continue _fun122325 }
 105:
                        zulu = mike;
 108:
                        mike = 'width';
                        entity[mike] = zulu;
                        zulu = 0;
                        mike = 'x';
                        entity[mike] = zulu;
                        mike = 'y';
                        entity[mike] = zulu;
                        return entity;
                    }
                };
                entity = mike.bind(tango)(entity);
                mike = _closure3_slot0;
                romeo = 16;
                yankee = romeo;
                if(mike) { _fun122324_ip = 484; continue _fun122324 }
 413:
                report = _closure2_slot4;
                oscar = _closure3_slot1;
                tango = _closure1_slot5;
                tango = oscar * tango;
                tango = report - tango;
                report = entity.length;
                zulu = _closure3_slot1;
                zulu = report - zulu;
                mike = _closure1_slot6;
                mike = zulu * mike;
                report = entity.length;
                zulu = 1;
                zulu = report - zulu;
                tango = tango - mike;
                mike = 32;
                mike = tango - mike;
                yankee = mike / zulu;
 484:
                mike = _closure1_slot11;
                verify = undefined;
                options = mike.bind(verify)(entity);
                zulu = options.bind(verify)();
                mike = zulu.done;
                golf = 2;
                oscar = 1;
                report = 32;
                tango = -1;
                if(mike) { _fun122324_ip = 643; continue _fun122324 }
 525:
                kilo = zulu.value;
                mike = kilo.width;
                if(!(tango === mike)) { _fun122324_ip = 594; continue _fun122324 }
 539:
                backup = entity.length;
                sizing = backup - oscar;
                backup = _closure1_slot6;
                output = sizing * backup;
                backup = entity.length;
                backup = backup - oscar;
                sizing = _closure2_slot4;
                output = report + output;
                backup = backup * yankee;
                backup = output + backup;
                backup = sizing - backup;
                kilo['width'] = backup;
                mike = backup;
 594:
                backup = _closure2_slot4;
                backup = backup / golf;
                sizing = mike / golf;
                backup = romeo - backup;
                backup = backup + sizing;
                kilo['x'] = backup;
                mike = mike + yankee;
                romeo = romeo + mike;
                backup = options.bind(verify)();
                mike = backup.done;
                zulu = backup;
                if(!mike) { _fun122324_ip = 525; continue _fun122324 }
 643:
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();