// discord_common/js/packages/flux/BatchedStoreListener.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = report[entity];
    entity = undefined;
    tango = oscar.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot3 = tango;
    mike = function() {
        tango = _closure1_slot3;
        zulu = function(argFoo, argBar) { // Original name: BatchedStoreListener
            zulu = this;
            var _closure3_slot0 = zulu;
            report = _closure1_slot2;
            tango = _closure2_slot0;
            entity = undefined;
            tango = report.bind(entity)(zulu, tango);
            mike = function() {
                _fun6980: for(var _fun6980_ip = 0; ; ) switch(_fun6980_ip) {
 0:
                    zulu = _closure1_slot0;
                    mike = _closure1_slot1;
                    entity = 2;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.getChangeSentinel;
                    zulu = mike.bind(zulu)();
                    tango = _closure3_slot0;
                    tango = tango.storeVersionHandled;
                    if(!(tango !== zulu)) { _fun6980_ip = 72; continue _fun6980 }
 52:
                    mike = _closure3_slot0;
                    tango = mike.changeCallback;
                    tango = tango.bind(mike)();
                    mike['storeVersionHandled'] = zulu;
 72:
                    return entity;
                }
            };
            zulu['handleStoreChange'] = mike;
            mike = argFoo;
            zulu['stores'] = mike;
            mike = argBar;
            zulu['changeCallback'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'attach';
        entity['key'] = mike;
        mike = function(argFoo) { // Original name: value
            mike = this;
            var _closure3_slot0 = mike;
            zulu = argFoo;
            var _closure3_slot1 = zulu;
            zulu = mike.stores;
            mike = zulu.forEach;
            entity = function(argFoo, argBar) {
                _fun6982: for(var _fun6982_ip = 0; ; ) switch(_fun6982_ip) {
 0:
                    zulu = argFoo;
                    entity = null;
                    if(!(entity != zulu)) { _fun6982_ip = 37; continue _fun6982 }
 9:
                    mike = zulu.addReactChangeListener;
                    entity = _closure3_slot0;
                    entity = entity.handleStoreChange;
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
 37:
                    entity = global;
                    zulu = entity.Error;
                    yankee = _closure3_slot1;
                    entity = entity.HermesInternal;
                    oscar = entity.concat;
                    romeo = '';
                    offset = " tried to load a non-existent store. Either it isn't defined or there is a circular dependency. Loaded ";
                    verify = argBar;
                    options = ' stores before error.';
                    yankee = romeo[oscar](yankee, offset, verify, options, golf);
                    mike = zulu.prototype;
                    mike = Object.create(mike, {constructor: {value: zulu}});
                    romeo = mike;
                    entity = new romeo[zulu](yankee, offset);
                    entity = entity instanceof Object ? entity : mike;
                    throw entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(2);
        mike[0] = entity;
        entity = {};
        oscar = 'detach';
        entity['key'] = oscar;
        report = function() { // Original name: value
            mike = this;
            var _closure3_slot0 = mike;
            zulu = mike.stores;
            mike = zulu.forEach;
            entity = function(argFoo) {
                zulu = argFoo;
                mike = zulu.removeReactChangeListener;
                entity = _closure3_slot0;
                entity = entity.handleStoreChange;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = report;
        mike[1] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = 3;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = '../discord_common/js/packages/flux/BatchedStoreListener.tsx';
    tango = report.bind(oscar)(tango);
    zulu['BatchedStoreListener'] = mike;
    return entity;
})();