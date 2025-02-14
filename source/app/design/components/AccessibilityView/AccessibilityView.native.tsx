// app/design/components/AccessibilityView/AccessibilityView.native.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    report = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    options = golf[entity];
    tango = argCorge;
    entity = undefined;
    options = tango.bind(entity)(options);
    tango = 1;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot2 = tango;
    tango = 2;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot3 = tango;
    tango = options.forwardRef;
    mike = function(argFoo, argBar) {
        _fun47898: for(var _fun47898_ip = 0; ; ) switch(_fun47898_ip) {
 0:
            zulu = argFoo;
            offset = zulu.accessibilityViewIsModal;
            tango = undefined;
            if(!(offset === tango)) { _fun47898_ip = 17; continue _fun47898 }
 15:
            offset = false;
 17:
            verify = zulu.nativeID;
            options = zulu.collapsable;
            oscar = zulu.onAccessibilityEscape;
            mike = {'accessibilityViewIsModal': 0, 'nativeID': 0, 'collapsable': 0, 'onAccessibilityEscape': 0};
            golf = null;
            backup = mike;
            foxtrot = null;
            entity = silentSetPrototypeOf(backup, foxtrot);
            backup = {};
            foxtrot = zulu;
            romeo = mike;
            report = copyDataProperties(backup, foxtrot, romeo);
            if(!offset) { _fun47898_ip = 75; continue _fun47898 }
 71:
            if(!(golf != oscar)) { _fun47898_ip = 175; continue _fun47898 }
 75:
            zulu = _closure1_slot0;
            yankee = _closure1_slot1;
            mike = 3;
            mike = yankee[mike];
            zulu = zulu.bind(tango)(mike);
            mike = {};
            mike['accessibilityViewIsModal'] = offset;
            mike['nativeID'] = verify;
            mike = zulu.bind(tango)(mike);
            zulu = _closure1_slot3;
            mike = _closure1_slot2;
            entity = {};
            offset = argBar;
            entity['ref'] = offset;
            entity['nativeID'] = verify;
            golf = golf == verify;
            if(!golf) { _fun47898_ip = 147; continue _fun47898 }
 144:
            golf = options;
 147:
            entity['collapsable'] = golf;
            entity['onAccessibilityEscape'] = oscar;
            backup = entity;
            foxtrot = report;
            report = copyDataProperties(backup, foxtrot);
            entity = zulu.bind(tango)(mike, entity);
            return entity;
 175:
            entity = global;
            zulu = entity.Error;
            entity = zulu.prototype;
            mike = Object.create(entity, {constructor: {value: zulu}});
            backup = 'Must have a onAccessibilityEscape callback when accessibilityViewIsModal is enabled.';
            kilo = mike;
            entity = new kilo[zulu](backup, foxtrot);
            entity = entity instanceof Object ? entity : mike;
            throw entity;
        }
    };
    tango = tango.bind(options)(mike);
    mike = 4;
    mike = golf[mike];
    report = report.bind(entity)(mike);
    mike = report.createAnimatedComponent;
    mike = mike.bind(report)(tango);
    report = 5;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'design/components/AccessibilityView/AccessibilityView.native.tsx';
    report = oscar.bind(golf)(report);
    zulu['AccessibilityView'] = tango;
    zulu['AccessibilityViewAnimated'] = mike;
    return entity;
})();