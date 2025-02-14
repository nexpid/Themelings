// app/modules/keyboard/native/PortalKeyboardRenderer.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
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
    tango = tango.KeyboardTypes;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot6 = tango;
    tango = new Array(0);
    var _closure1_slot7 = tango;
    tango = function(argFoo) { // Original name: transitionGroupGetItemKey
        entity = argFoo;
        entity = entity.id;
        return entity;
    };
    var _closure1_slot8 = tango;
    tango = function(argFoo, argBar, argBaz, argCorge) { // Original name: transitionGroupRenderItem
        _fun118415: for(var _fun118415_ip = 0; ; ) switch(_fun118415_ip) {
 0:
            mike = argBaz;
            tango = _closure1_slot0;
            report = _closure1_slot2;
            entity = 4;
            entity = report[entity];
            oscar = undefined;
            entity = tango.bind(oscar)(entity);
            entity = entity.TransitionStates;
            entity = entity.YEETED;
            tango = mike === entity;
            if(!tango) { _fun118415_ip = 71; continue _fun118415 }
 47:
            entity = _closure1_slot4;
            report = entity.keyboardType;
            entity = _closure1_slot5;
            entity = entity.SYSTEM;
            tango = report === entity;
 71:
            if(!tango) { _fun118415_ip = 103; continue _fun118415 }
 74:
            report = _closure1_slot0;
            golf = _closure1_slot2;
            entity = 5;
            entity = golf[entity];
            report = report.bind(oscar)(entity);
            entity = report.isAndroid;
            tango = entity.bind(report)();
 103:
            entity = null;
            if(tango) { _fun118415_ip = 163; continue _fun118415 }
 108:
            report = _closure1_slot6;
            tango = _closure1_slot1;
            golf = _closure1_slot2;
            zulu = 6;
            zulu = golf[zulu];
            tango = tango.bind(oscar)(zulu);
            zulu = {};
            golf = argBar;
            zulu['item'] = golf;
            zulu['state'] = mike;
            mike = argCorge;
            zulu['cleanUp'] = mike;
            mike = argFoo;
            entity = report.bind(oscar)(tango, zulu, mike);
 163:
            return entity;
        }
    };
    var _closure1_slot9 = tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/keyboard/native/PortalKeyboardRenderer.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: PortalKeyboardRenderer
        _fun118416: for(var _fun118416_ip = 0; ; ) switch(_fun118416_ip) {
 0:
            entity = argFoo;
            entity = entity.portal;
            tango = undefined;
            if(!(entity === tango)) { _fun118416_ip = 19; continue _fun118416 }
 17:
            entity = true;
 19:
            var _closure2_slot0 = tango;
            var _closure2_slot1 = tango;
            var _closure2_slot2 = tango;
            verify = _closure1_slot3;
            zulu = verify.useId;
            oscar = zulu.bind(verify)();
            _closure2_slot0 = oscar;
            options = verify.useLayoutEffect;
            report = new Array(1);
            report[0] = oscar;
            zulu = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 7;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.registerPortalKeyboardRenderer;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu = options.bind(verify)(zulu, report);
            options = verify.useLayoutEffect;
            report = function() {
                tango = function() { // Original name: onKeyboardStoreChange
                    _fun118419: for(var _fun118419_ip = 0; ; ) switch(_fun118419_ip) {
 0:
                        report = _closure1_slot0;
                        entity = _closure1_slot2;
                        tango = 7;
                        zulu = entity[tango];
                        entity = undefined;
                        zulu = report.bind(entity)(zulu);
                        report = zulu.usePortalKeyboardStore;
                        zulu = report.getState;
                        zulu = zulu.bind(report)();
                        report = zulu.keyboard;
                        zulu = _closure1_slot4;
                        oscar = zulu.keyboardType;
                        zulu = null;
                        zulu = zulu != report;
                        if(!zulu) { _fun118419_ip = 75; continue _fun118419 }
 66:
                        report = report.type;
                        zulu = oscar !== report;
 75:
                        if(!zulu) { _fun118419_ip = 105; continue _fun118419 }
 78:
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        mike = mike[tango];
                        zulu = zulu.bind(entity)(mike);
                        mike = zulu.closeUnhandledPortalKeyboard;
                        mike = mike.bind(zulu)();
 105:
                        return entity;
                    }
                };
                var _closure3_slot0 = tango;
                zulu = _closure1_slot4;
                mike = zulu.addChangeListener;
                mike = mike.bind(zulu)(tango);
                entity = function() {
                    tango = _closure1_slot4;
                    zulu = tango.removeChangeListener;
                    mike = _closure3_slot0;
                    mike = zulu.bind(tango)(mike);
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 7;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.closeUnhandledPortalKeyboard;
                    mike = mike.bind(zulu)();
                    return entity;
                };
                return entity;
            };
            zulu = new Array(0);
            zulu = options.bind(verify)(report, zulu);
            options = _closure1_slot0;
            zulu = _closure1_slot2;
            report = 7;
            zulu = zulu[report];
            options = options.bind(tango)(zulu);
            zulu = options.usePortalKeyboardStore;
            zulu = zulu.bind(options)();
            verify = zulu.keyboard;
            _closure2_slot1 = verify;
            options = zulu.renderers;
            offset = options.length;
            zulu = 0;
            offset = zulu === offset;
            if(offset) { _fun118416_ip = 182; continue _fun118416 }
 162:
            yankee = options.length;
            zulu = 1;
            zulu = yankee - zulu;
            zulu = options[zulu];
            offset = zulu === oscar;
 182:
            _closure2_slot2 = offset;
            options = _closure1_slot3;
            oscar = options.useMemo;
            zulu = new Array(2);
            zulu[0] = offset;
            zulu[1] = verify;
            mike = function() {
                _fun118421: for(var _fun118421_ip = 0; ; ) switch(_fun118421_ip) {
 0:
                    zulu = _closure2_slot1;
                    entity = null;
                    if(!(entity != zulu)) { _fun118421_ip = 20; continue _fun118421 }
 13:
                    entity = _closure2_slot2;
                    if(entity) { _fun118421_ip = 29; continue _fun118421 }
 20:
                    entity = _closure1_slot7;
                    _fun118421_ip = 44; continue _fun118421;
 29:
                    zulu = _closure2_slot1;
                    mike = new Array(1);
                    mike[0] = zulu;
                    entity = mike;
 44:
                    return entity;
                }
            };
            options = oscar.bind(options)(mike, zulu);
            if(entity) { _fun118416_ip = 234; continue _fun118416 }
 223:
            entity = _closure1_slot3;
            zulu = entity.Fragment;
            _fun118416_ip = 257; continue _fun118416;
 234:
            mike = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[report];
            entity = mike.bind(tango)(entity);
            zulu = entity.PortalKeyboard;
 257:
            mike = _closure1_slot6;
            entity = {};
            oscar = _closure1_slot0;
            verify = _closure1_slot2;
            report = 4;
            report = verify[report];
            report = oscar.bind(tango)(report);
            oscar = report.TransitionGroup;
            report = {};
            report['items'] = options;
            options = _closure1_slot8;
            report['getItemKey'] = options;
            golf = _closure1_slot9;
            report['renderItem'] = golf;
            report = mike.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = mike.bind(tango)(zulu, entity);
            return entity;
        }
    };
    zulu['PortalKeyboardRenderer'] = mike;
    return entity;
})();