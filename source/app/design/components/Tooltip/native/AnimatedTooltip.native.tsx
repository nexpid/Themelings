// app/design/components/Tooltip/native/AnimatedTooltip.native.tsx
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
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    golf = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.StyleSheet;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot6 = tango;
    tango = function(argFoo, argBar) { // Original name: renderTooltipItem
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            verify = argFoo;
            tango = _closure1_slot6;
            mike = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 4;
            entity = zulu[entity];
            zulu = undefined;
            entity = mike.bind(zulu)(entity);
            mike = entity.View;
            entity = {};
            report = new Array(2);
            golf = argBar;
            report[0] = golf;
            golf = _closure1_slot5;
            golf = golf.absoluteFill;
            report[1] = golf;
            entity['style'] = report;
            report = 'box-none';
            entity['pointerEvents'] = report;
            report = null;
            golf = report != verify;
            if(!golf) { _fun00002_ip = 136; continue _fun00001 }
 88:
            options = _closure1_slot6;
            golf = _closure1_slot0;
            offset = _closure1_slot2;
            oscar = 5;
            oscar = offset[oscar];
            oscar = golf.bind(zulu)(oscar);
            golf = oscar.Tooltip;
            oscar = {};
            romeo = oscar;
            yankee = verify;
            verify = copyDataProperties(romeo, yankee);
            report = options.bind(zulu)(golf, oscar);
 136:
            entity['children'] = report;
            entity = tango.bind(zulu)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot7 = tango;
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'design/components/Tooltip/native/AnimatedTooltip.native.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: AnimatedTooltip
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argFoo;
            romeo = report.visible;
            var _closure2_slot0 = romeo;
            mike = null;
            tango = Object.create(mike);
            mike = 0;
            tango['visible'] = mike;
            sizing = {};
            kilo = report;
            backup = tango;
            options = copyDataProperties(sizing, kilo, backup);
            yankee = _closure1_slot4;
            golf = yankee.useContext;
            oscar = _closure1_slot0;
            offset = _closure1_slot2;
            zulu = 6;
            zulu = offset[zulu];
            tango = undefined;
            zulu = oscar.bind(tango)(zulu);
            zulu = zulu.AccessibilityPreferencesContext;
            zulu = golf.bind(yankee)(zulu);
            zulu = zulu.reducedMotion;
            golf = zulu.enabled;
            zulu = 7;
            zulu = offset[zulu];
            verify = oscar.bind(tango)(zulu);
            oscar = verify.tooltipEnterExitAnimation;
            zulu = options.position;
            oscar = oscar.bind(verify)(zulu);
            verify = yankee.useState;
            zulu = false;
            foxtrot = verify.bind(yankee)(zulu);
            verify = _closure1_slot3;
            zulu = 2;
            zulu = verify.bind(tango)(foxtrot, zulu);
            verify = zulu[mike];
            mike = 1;
            mike = zulu[mike];
            var _closure2_slot1 = mike;
            zulu = yankee.useEffect;
            mike = new Array(1);
            mike[0] = romeo;
            entity = function() {
                zulu = _closure2_slot1;
                mike = _closure2_slot0;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            entity = zulu.bind(yankee)(entity, mike);
            zulu = _closure1_slot6;
            mike = _closure1_slot1;
            entity = 8;
            entity = offset[entity];
            mike = mike.bind(tango)(entity);
            entity = {};
            entity['useReducedMotion'] = golf;
            golf = undefined;
            if(!verify) { _fun00004_ip = 223; continue _fun00003 }
 220:
            golf = options;
 223:
            entity['item'] = golf;
            entity['entering'] = oscar;
            entity['exiting'] = oscar;
            report = _closure1_slot7;
            entity['renderItem'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['AnimatedTooltip'] = mike;
    return entity;
})();