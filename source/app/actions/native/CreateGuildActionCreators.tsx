// app/actions/native/CreateGuildActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 2;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'actions/native/CreateGuildActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: showInstantInviteModal
        mike = argFoo;
        var _closure2_slot0 = mike;
        zulu = _closure1_slot2;
        mike = zulu.addConditionalChangeListener;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tango = _closure1_slot2;
                zulu = tango.getDefaultChannel;
                entity = _closure2_slot0;
                zulu = zulu.bind(tango)(entity);
                var _closure3_slot0 = zulu;
                entity = null;
                entity = entity == zulu;
                if(entity) { _fun00002_ip = 64; continue _fun00001 }
 40:
                zulu = global;
                tango = zulu.setImmediate;
                zulu = undefined;
                mike = function() {
                    zulu = _closure1_slot0;
                    mike = _closure1_slot1;
                    entity = 1;
                    mike = mike[entity];
                    entity = undefined;
                    report = zulu.bind(entity)(mike);
                    tango = report.showInstantInviteActionSheet;
                    zulu = _closure3_slot0;
                    mike = 'Guild Create';
                    mike = tango.bind(report)(zulu, mike);
                    return entity;
                };
                mike = tango.bind(zulu)(mike);
                entity = false;
 64:
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    zulu['showInstantInviteModal'] = mike;
    return entity;
})();