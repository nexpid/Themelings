// app/design/components/Navigator/native/useNavigatorShouldCrossfade.native.tsx
export default (function(_, argBar, __, argCorge, ___, argFred, argPlugh) {
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
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'design/components/Navigator/native/useNavigatorShouldCrossfade.native.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: useNavigatorShouldCrossfade
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = _closure1_slot2;
            mike = zulu.useContext;
            report = _closure1_slot0;
            oscar = _closure1_slot1;
            entity = 2;
            entity = oscar[entity];
            tango = undefined;
            entity = report.bind(tango)(entity);
            entity = entity.AccessibilityPreferencesContext;
            entity = mike.bind(zulu)(entity);
            mike = entity.reducedMotion;
            mike = mike.enabled;
            entity = entity.prefersCrossfades;
            zulu = 1;
            zulu = oscar[zulu];
            tango = report.bind(tango)(zulu);
            zulu = tango.isAndroid;
            zulu = zulu.bind(tango)();
            if(!zulu) { _fun00002_ip = 90; continue _fun00001 }
 87:
            entity = mike;
 90:
            return entity;
        }
    };
    zulu['useNavigatorShouldCrossfade'] = mike;
    return entity;
})();