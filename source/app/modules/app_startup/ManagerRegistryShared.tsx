// app/modules/app_startup/ManagerRegistryShared.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    zulu = argFred;
    tango = argPlugh;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = tango;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun127812: for(var _fun127812_ip = 0; ; ) switch(_fun127812_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun127812_ip = 46; continue _fun127812 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun127812_ip = 55; continue _fun127812 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun127812_ip = 345; continue _fun127812 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun127812_ip = 323; continue _fun127812 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun127812_ip = 283; continue _fun127812 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun127812_ip = 270; continue _fun127812 }
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
            if(!golf) { _fun127812_ip = 163; continue _fun127812 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun127812_ip = 179; continue _fun127812 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun127812_ip = 249; continue _fun127812 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun127812_ip = 249; continue _fun127812 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun127812_ip = 234; continue _fun127812 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun127812_ip = 247; continue _fun127812 }
 234:
            verify = _closure1_slot5;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun127812_ip = 265; continue _fun127812;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun127812_ip = 283; continue _fun127812;
 270:
            golf = _closure1_slot5;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun127812_ip = 323; continue _fun127812 }
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
            if(!tango) { _fun127812_ip = 330; continue _fun127812 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun127813: for(var _fun127813_ip = 0; ; ) switch(_fun127813_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun127813_ip = 56; continue _fun127813 }
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
                    _fun127813_ip = 67; continue _fun127813;
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
    var _closure1_slot4 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun127814: for(var _fun127814_ip = 0; ; ) switch(_fun127814_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun127814_ip = 23; continue _fun127814 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun127814_ip = 33; continue _fun127814 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun127814_ip = 70; continue _fun127814 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun127814_ip = 55; continue _fun127814 }
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
        _fun127816: for(var _fun127816_ip = 0; ; ) switch(_fun127816_ip) {
 0:
            oscar = argFoo;
            report = oscar.actions;
            entity = null;
            if(!(entity == report)) { _fun127816_ip = 19; continue _fun127816 }
 15:
            report = new Array(0);
 19:
            entity = oscar.hasStoreChangeListeners;
            if(entity) { _fun127816_ip = 34; continue _fun127816 }
 28:
            entity = oscar.loadAfterConnectionOpen;
 34:
            golf = report;
            if(!entity) { _fun127816_ip = 94; continue _fun127816 }
 40:
            entity = report.includes;
            zulu = 'POST_CONNECTION_OPEN';
            mike = entity.bind(report)(zulu);
            entity = report;
            if(mike) { _fun127816_ip = 91; continue _fun127816 }
 60:
            mike = new Array(1);
            verify = 0;
            yankee = mike;
            offset = report;
            tango = arraySpread(yankee, offset, verify);
            mike[tango] = zulu;
            zulu = 1;
            zulu = tango + zulu;
            entity = mike;
 91:
            golf = entity;
 94:
            entity = oscar.loadRightBeforeConnectionOpen;
            zulu = golf;
            if(!entity) { _fun127816_ip = 160; continue _fun127816 }
 106:
            entity = golf.includes;
            tango = 'CONNECTION_OPEN';
            mike = entity.bind(golf)(tango);
            entity = golf;
            if(mike) { _fun127816_ip = 157; continue _fun127816 }
 126:
            mike = new Array(1);
            verify = 0;
            yankee = mike;
            offset = golf;
            report = arraySpread(yankee, offset, verify);
            mike[report] = tango;
            tango = 1;
            tango = report + tango;
            entity = mike;
 157:
            zulu = entity;
 160:
            mike = _closure1_slot4;
            entity = undefined;
            tango = mike.bind(entity)(zulu);
            zulu = tango.bind(entity)();
            mike = zulu.done;
            if(mike) { _fun127816_ip = 247; continue _fun127816 }
 186:
            golf = zulu.value;
            mike = _closure1_slot2;
            mike = golf in mike;
            if(mike) { _fun127816_ip = 214; continue _fun127816 }
 202:
            options = _closure1_slot2;
            mike = new Array(0);
            options[golf] = mike;
 214:
            mike = _closure1_slot2;
            golf = mike[golf];
            mike = golf.push;
            mike = mike.bind(golf)(oscar);
            golf = tango.bind(entity)();
            mike = golf.done;
            zulu = golf;
            if(!mike) { _fun127816_ip = 186; continue _fun127816 }
 247:
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = function(argFoo) { // Original name: handleAction
        _fun127817: for(var _fun127817_ip = 0; ; ) switch(_fun127817_ip) {
 0:
            entity = argFoo;
            zulu = entity.type;
            mike = 'CONNECTION_OPEN';
            mike = mike !== zulu;
            if(!mike) { _fun127817_ip = 32; continue _fun127817 }
 19:
            tango = entity.type;
            zulu = 'OVERLAY_INITIALIZE';
            mike = zulu !== tango;
 32:
            if(mike) { _fun127817_ip = 44; continue _fun127817 }
 35:
            mike = true;
            _closure1_slot3 = mike;
 44:
            tango = entity.type;
            zulu = _closure1_slot2;
            zulu = tango in zulu;
            if(!zulu) { _fun127817_ip = 213; continue _fun127817 }
 66:
            zulu = new Array(0);
            report = _closure1_slot4;
            oscar = _closure1_slot2;
            tango = entity.type;
            tango = oscar[tango];
            golf = undefined;
            oscar = report.bind(golf)(tango);
            report = oscar.bind(golf)();
            tango = report.done;
            if(tango) { _fun127817_ip = 174; continue _fun127817 }
 106:
            options = report.value;
            tango = _closure1_slot3;
            if(tango) { _fun127817_ip = 139; continue _fun127817 }
 118:
            tango = options.neverLoadBeforeConnectionOpen;
            if(!tango) { _fun127817_ip = 139; continue _fun127817 }
 127:
            tango = zulu.push;
            tango = tango.bind(zulu)(options);
            _fun127817_ip = 159; continue _fun127817;
 139:
            tango = options.inlineRequire;
            options = tango.bind(options)();
            tango = options.initialize;
            tango = tango.bind(options)();
 159:
            options = oscar.bind(golf)();
            tango = options.done;
            report = options;
            if(!tango) { _fun127817_ip = 106; continue _fun127817 }
 174:
            report = zulu.length;
            tango = 0;
            if(!(!(report > tango))) { _fun127817_ip = 200; continue _fun127817 }
 185:
            report = _closure1_slot2;
            tango = entity.type;
            tango = delete report[tango];
            _fun127817_ip = 213; continue _fun127817;
 200:
            mike = _closure1_slot2;
            entity = entity.type;
            mike[entity] = zulu;
 213:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    oscar = {};
    report = true;
    oscar['value'] = report;
    report = '__esModule';
    report = golf.bind(options)(zulu, report, oscar);
    oscar = entity.Set;
    entity = oscar.prototype;
    romeo = Object.create(entity, {constructor: {value: oscar}});
    yankee = ['CHANNEL_SELECT', 'CHANNEL_PRELOAD', 'MESSAGE_CREATE'];
    entity = new romeo[oscar](yankee, offset);
    entity = {};
    var _closure1_slot2 = entity;
    entity = false;
    var _closure1_slot3 = entity;
    entity = 1;
    report = tango[entity];
    tango = argBar;
    entity = undefined;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/app_startup/ManagerRegistryShared.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: initialize
        _fun127818: for(var _fun127818_ip = 0; ; ) switch(_fun127818_ip) {
 0:
            options = argFoo;
            oscar = options;
            entity = undefined;
            for(zulu in oscar)
 19:
            {
 28:
                verify = zulu;
                offset = options[verify];
                verify = _closure1_slot6;
                verify = verify.bind(entity)(entity, offset);
                verify = _closure1_slot7;
                verify = verify.bind(entity)(offset);
                _fun127818_ip = 19; continue _fun127818;
            }
 56:
            tango = _closure1_slot0;
            report = _closure1_slot1;
            zulu = 0;
            zulu = report[zulu];
            tango = tango.bind(entity)(zulu);
            zulu = tango.addInterceptor;
            mike = _closure1_slot8;
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    zulu['initialize'] = mike;
    return entity;
})();