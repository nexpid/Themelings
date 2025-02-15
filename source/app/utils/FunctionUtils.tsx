// app/utils/FunctionUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    zulu = argFred;
    tango = function(argFoo, argBar) { // Original name: areArraysShallowlyEqual
        _fun41830: for(var _fun41830_ip = 0; ; ) switch(_fun41830_ip) {
 0:
            tango = argFoo;
            zulu = argBar;
            if(!(tango !== zulu)) { _fun41830_ip = 79; continue _fun41830 }
 10:
            entity = null;
            if(!(entity != tango)) { _fun41830_ip = 75; continue _fun41830 }
 16:
            if(!(entity != zulu)) { _fun41830_ip = 75; continue _fun41830 }
 20:
            mike = tango.length;
            entity = zulu.length;
            if(!(mike === entity)) { _fun41830_ip = 75; continue _fun41830 }
 34:
            mike = tango.length;
            entity = 0;
            report = entity < mike;
            if(!report) { _fun41830_ip = 67; continue _fun41830 }
 48:
            oscar = tango[entity];
            report = zulu[entity];
            if(!(oscar === report)) { _fun41830_ip = 71; continue _fun41830 }
 60:
            entity = entity + 1;
            if(entity < mike) { _fun41830_ip = 48; continue _fun41830 }
 67:
            entity = true;
            return entity;
 71:
            entity = false;
            return entity;
 75:
            entity = false;
            return entity;
 79:
            entity = true;
            return entity;
        }
    };
    var _closure1_slot0 = tango;
    entity = global;
    golf = entity.Object;
    oscar = golf.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(golf)(zulu, entity, report);
    report = argPlugh;
    entity = 0;
    oscar = report[entity];
    report = argBar;
    entity = undefined;
    golf = report.bind(entity)(oscar);
    oscar = golf.fileFinishedImporting;
    report = 'utils/FunctionUtils.tsx';
    report = oscar.bind(golf)(report);
    report = function() { // Original name: createDeferAndBatch
        mike = null;
        var _closure2_slot0 = mike;
        mike = new Array(0);
        var _closure2_slot1 = mike;
        entity = function(argFoo) {
            _fun41832: for(var _fun41832_ip = 0; ; ) switch(_fun41832_ip) {
 0:
                tango = _closure2_slot1;
                zulu = tango.push;
                entity = argFoo;
                entity = zulu.bind(tango)(entity);
                zulu = _closure2_slot0;
                entity = null;
                if(!(entity == zulu)) { _fun41832_ip = 56; continue _fun41832 }
 30:
                entity = global;
                tango = entity.setImmediate;
                zulu = undefined;
                entity = function() {
                    mike = null;
                    _closure2_slot0 = mike;
                    mike = _closure2_slot1;
                    zulu = new Array(0);
                    entity = 0;
                    golf = zulu;
                    oscar = mike;
                    report = 0;
                    tango = arraySpread(golf, oscar, report);
                    mike['length'] = entity;
                    mike = zulu.forEach;
                    entity = function(argFoo) {
                        mike = argFoo;
                        entity = undefined;
                        entity = mike.bind(entity)();
                        return entity;
                    };
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
                };
                entity = tango.bind(zulu)(entity);
                _closure2_slot0 = entity;
 56:
                entity = undefined;
                return entity;
            }
        };
        return entity;
    };
    zulu['createDeferAndBatch'] = report;
    zulu['areArraysShallowlyEqual'] = tango;
    tango = function(argFoo) { // Original name: cachedFunction
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = null;
        var _closure2_slot1 = mike;
        var _closure2_slot2 = mike;
        entity = function(argFoo) {
            _fun41836: for(var _fun41836_ip = 0; ; ) switch(_fun41836_ip) {
 0:
                verify = 0;
                mike = copyRestArgs(verify);
                tango = _closure1_slot0;
                zulu = _closure2_slot1;
                report = undefined;
                zulu = tango.bind(report)(zulu, mike);
                if(zulu) { _fun41836_ip = 67; continue _fun41836 }
 31:
                tango = _closure2_slot0;
                zulu = new Array(0);
                verify = zulu;
                options = mike;
                golf = 0;
                oscar = arraySpread(verify, options, golf);
                verify = tango;
                options = zulu;
                golf = undefined;
                zulu = apply(verify, options, golf);
                _closure2_slot2 = zulu;
 67:
                _closure2_slot1 = mike;
                entity = _closure2_slot2;
                return entity;
            }
        };
        return entity;
    };
    zulu['cachedFunction'] = tango;
    tango = function(argFoo) { // Original name: promiseThrottle
        _fun41837: for(var _fun41837_ip = 0; ; ) switch(_fun41837_ip) {
 0:
            mike = arguments[1];
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            zulu = undefined;
            if(!(mike === zulu)) { _fun41837_ip = 24; continue _fun41837 }
 18:
            mike = 5000;
 24:
            var _closure2_slot1 = mike;
            mike = -1;
            var _closure2_slot2 = mike;
            mike = null;
            var _closure2_slot3 = mike;
            entity = function() {
                _fun41838: for(var _fun41838_ip = 0; ; ) switch(_fun41838_ip) {
 0:
                    zulu = _closure2_slot3;
                    mike = null;
                    mike = mike == zulu;
                    if(mike) { _fun41838_ip = 41; continue _fun41838 }
 16:
                    zulu = global;
                    tango = zulu.Date;
                    zulu = tango.now;
                    tango = zulu.bind(tango)();
                    zulu = _closure2_slot2;
                    mike = tango >= zulu;
 41:
                    if(!mike) { _fun41838_ip = 87; continue _fun41838 }
 44:
                    mike = global;
                    zulu = mike.Date;
                    mike = zulu.now;
                    zulu = mike.bind(zulu)();
                    mike = _closure2_slot1;
                    mike = zulu + mike;
                    _closure2_slot2 = mike;
                    zulu = _closure2_slot0;
                    mike = undefined;
                    mike = zulu.bind(mike)();
                    _closure2_slot3 = mike;
 87:
                    entity = _closure2_slot3;
                    return entity;
                }
            };
            return entity;
        }
    };
    zulu['promiseThrottle'] = tango;
    tango = function(argFoo) { // Original name: clearObject
        _fun41839: for(var _fun41839_ip = 0; ; ) switch(_fun41839_ip) {
 0:
            oscar = argFoo;
            tango = oscar;
            for(entity in tango)
 14:
            {
 23:
                golf = entity;
                options = oscar.hasOwnProperty;
                options = options.bind(oscar)(golf);
                if(!options) { _fun41839_ip = 14; continue _fun41839 }
 40:
                golf = delete oscar[golf];
                _fun41839_ip = 14; continue _fun41839;
            }
 46:
            entity = undefined;
            return entity;
        }
    };
    zulu['clearObject'] = tango;
    mike = function(argFoo) { // Original name: isPlainObjectEmpty
        _fun41840: for(var _fun41840_ip = 0; ; ) switch(_fun41840_ip) {
 0:
            tango = argFoo;
            for(entity in tango)
 11:
            {
 20:
                entity = false;
                return entity;
            }
 24:
            entity = true;
            return entity;
        }
    };
    zulu['isPlainObjectEmpty'] = mike;
    return entity;
})();