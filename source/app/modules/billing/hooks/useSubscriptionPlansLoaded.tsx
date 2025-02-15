// app/modules/billing/hooks/useSubscriptionPlansLoaded.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun96115: for(var _fun96115_ip = 0; ; ) switch(_fun96115_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun96115_ip = 46; continue _fun96115 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun96115_ip = 55; continue _fun96115 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun96115_ip = 345; continue _fun96115 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun96115_ip = 323; continue _fun96115 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun96115_ip = 283; continue _fun96115 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun96115_ip = 270; continue _fun96115 }
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
            if(!golf) { _fun96115_ip = 163; continue _fun96115 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun96115_ip = 179; continue _fun96115 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun96115_ip = 249; continue _fun96115 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun96115_ip = 249; continue _fun96115 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun96115_ip = 234; continue _fun96115 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun96115_ip = 247; continue _fun96115 }
 234:
            verify = _closure1_slot8;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun96115_ip = 265; continue _fun96115;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun96115_ip = 283; continue _fun96115;
 270:
            golf = _closure1_slot8;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun96115_ip = 323; continue _fun96115 }
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
            if(!tango) { _fun96115_ip = 330; continue _fun96115 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun96116: for(var _fun96116_ip = 0; ; ) switch(_fun96116_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun96116_ip = 56; continue _fun96116 }
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
                    _fun96116_ip = 67; continue _fun96116;
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
    var _closure1_slot7 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun96117: for(var _fun96117_ip = 0; ; ) switch(_fun96117_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun96117_ip = 23; continue _fun96117 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun96117_ip = 33; continue _fun96117 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun96117_ip = 70; continue _fun96117 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun96117_ip = 55; continue _fun96117 }
 70:
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    mike = function() { // Original name: getSubscriptionPlansLoaded
        _fun96118: for(var _fun96118_ip = 0; ; ) switch(_fun96118_ip) {
 0:
            options = arguments[0];
            entity = arguments[1];
            golf = undefined;
            if(!(options === golf)) { _fun96118_ip = 35; continue _fun96118 }
 12:
            backup = _closure1_slot5;
            mike = new Array(0);
            foxtrot = 0;
            kilo = mike;
            zulu = arraySpread(kilo, backup, foxtrot);
            options = mike;
 35:
            if(!(entity === golf)) { _fun96118_ip = 73; continue _fun96118 }
 39:
            tango = _closure1_slot2;
            mike = new Array(3);
            mike[0] = tango;
            tango = _closure1_slot3;
            mike[1] = tango;
            zulu = _closure1_slot4;
            mike[2] = zulu;
            entity = mike;
 73:
            report = entity;
            mike = report[Symbol.iterator];
            report = mike().next;
            tango = report().value;
            entity = mike;
            zulu = entity === golf;
            entity = undefined;
            if(zulu) { _fun96118_ip = 98; continue _fun96118 }
 95:
            entity = tango;
 98:
            oscar = undefined;
            if(zulu) { _fun96118_ip = 128; continue _fun96118 }
 103:
            verify = report().value;
            tango = mike;
            tango = tango === golf;
            oscar = undefined;
            zulu = tango;
            if(tango) { _fun96118_ip = 128; continue _fun96118 }
 122:
            oscar = verify;
            zulu = tango;
 128:
            tango = undefined;
            if(zulu) { _fun96118_ip = 158; continue _fun96118 }
 133:
            verify = report().value;
            report = mike;
            report = report === golf;
            tango = undefined;
            zulu = report;
            if(report) { _fun96118_ip = 158; continue _fun96118 }
 152:
            tango = verify;
            zulu = report;
 158:
            if(zulu) { _fun96118_ip = 164; continue _fun96118 }
 161:
            mike.return();
 164:
            zulu = entity.paymentSourceIds;
            offset = entity.defaultPaymentSourceId;
            entity = oscar.isLoadedForSKUs;
            entity = entity.bind(oscar)(options);
            mike = tango.getPremiumTypeSubscription;
            tango = mike.bind(tango)();
            mike = null;
            report = mike == tango;
            romeo = undefined;
            if(report) { _fun96118_ip = 218; continue _fun96118 }
 212:
            romeo = tango.paymentSourceId;
 218:
            if(!(mike != romeo)) { _fun96118_ip = 285; continue _fun96118 }
 222:
            tango = oscar.hasPaymentSourceForSKUIds;
            tango = tango.bind(oscar)(romeo, options);
            if(tango) { _fun96118_ip = 285; continue _fun96118 }
 237:
            report = _closure1_slot6;
            tango = global;
            tango = tango.HermesInternal;
            yankee = tango.concat;
            verify = 'subscription payment source ';
            tango = ' not loaded for ';
            tango = yankee.bind(verify)(romeo, tango, options);
            tango = report.bind(golf)(tango);
            tango = false;
            return tango;
 285:
            if(!(mike != offset)) { _fun96118_ip = 352; continue _fun96118 }
 289:
            mike = oscar.hasPaymentSourceForSKUIds;
            mike = mike.bind(oscar)(offset, options);
            if(mike) { _fun96118_ip = 352; continue _fun96118 }
 304:
            tango = _closure1_slot6;
            mike = global;
            mike = mike.HermesInternal;
            verify = mike.concat;
            report = 'default payment source ';
            mike = ' not loaded for ';
            mike = verify.bind(report)(offset, mike, options);
            mike = tango.bind(golf)(mike);
            mike = false;
            return mike;
 352:
            mike = _closure1_slot7;
            tango = mike.bind(golf)(zulu);
            zulu = tango.bind(golf)();
            mike = zulu.done;
            if(mike) { _fun96118_ip = 456; continue _fun96118 }
 376:
            romeo = zulu.value;
            mike = oscar.hasPaymentSourceForSKUIds;
            mike = mike.bind(oscar)(romeo, options);
            if(mike) { _fun96118_ip = 441; continue _fun96118 }
 396:
            verify = _closure1_slot6;
            mike = global;
            mike = mike.HermesInternal;
            yankee = mike.concat;
            offset = 'payment source ';
            mike = ' not loaded for ';
            mike = yankee.bind(offset)(romeo, mike, options);
            mike = verify.bind(golf)(mike);
            mike = false;
            return mike;
 441:
            verify = tango.bind(golf)();
            mike = verify.done;
            zulu = verify;
            if(!mike) { _fun96118_ip = 376; continue _fun96118 }
 456:
            return entity;
        }
    };
    var _closure1_slot9 = mike;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = options.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 1;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 2;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 3;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.ACTIVE_PREMIUM_SKUS;
    var _closure1_slot5 = report;
    report = 4;
    report = golf[report];
    verify = options.bind(entity)(report);
    report = verify.prototype;
    backup = Object.create(report, {constructor: {value: verify}});
    foxtrot = 'useSubscriptionPlansLoaded';
    report = new backup[verify](foxtrot, romeo);
    report = function() { // Original name: log
        entity = undefined;
        return entity;
    };
    var _closure1_slot6 = report;
    report = 6;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/billing/hooks/useSubscriptionPlansLoaded.tsx';
    report = oscar.bind(golf)(report);
    tango = function() { // Original name: useSubscriptionPlansLoaded
        _fun96120: for(var _fun96120_ip = 0; ; ) switch(_fun96120_ip) {
 0:
            oscar = arguments[0];
            report = undefined;
            if(!(oscar === report)) { _fun96120_ip = 34; continue _fun96120 }
 11:
            verify = _closure1_slot5;
            mike = new Array(0);
            options = 0;
            offset = mike;
            zulu = arraySpread(offset, verify, options);
            oscar = mike;
 34:
            var _closure2_slot0 = oscar;
            tango = _closure1_slot0;
            golf = _closure1_slot1;
            zulu = 5;
            zulu = golf[zulu];
            report = tango.bind(report)(zulu);
            tango = report.useStateFromStores;
            golf = _closure1_slot2;
            zulu = new Array(3);
            zulu[0] = golf;
            golf = _closure1_slot3;
            zulu[1] = golf;
            mike = _closure1_slot4;
            zulu[2] = mike;
            mike = new Array(1);
            mike[0] = oscar;
            entity = function() {
                tango = _closure1_slot9;
                zulu = _closure2_slot0;
                report = _closure1_slot2;
                mike = new Array(3);
                mike[0] = report;
                report = _closure1_slot3;
                mike[1] = report;
                entity = _closure1_slot4;
                mike[2] = entity;
                entity = undefined;
                entity = tango.bind(entity)(zulu, mike);
                return entity;
            };
            entity = tango.bind(report)(zulu, entity, mike);
            return entity;
        }
    };
    zulu['useSubscriptionPlansLoaded'] = tango;
    zulu['getSubscriptionPlansLoaded'] = mike;
    return entity;
})();