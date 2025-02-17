// app/design/components/Coachmark/native/AnimatedCoachmark.native.tsx
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
            offset = argBar;
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
            report[0] = offset;
            golf = _closure1_slot5;
            golf = golf.absoluteFill;
            report[1] = golf;
            entity['style'] = report;
            report = 'box-none';
            entity['pointerEvents'] = report;
            report = null;
            golf = report != verify;
            if(!golf) { _fun00002_ip = 147; continue _fun00001 }
 88:
            options = _closure1_slot6;
            golf = _closure1_slot0;
            yankee = _closure1_slot2;
            oscar = 5;
            oscar = yankee[oscar];
            oscar = golf.bind(zulu)(oscar);
            golf = oscar.CoachmarkContainer;
            oscar = {};
            foxtrot = oscar;
            romeo = verify;
            verify = copyDataProperties(foxtrot, romeo);
            verify = 'enterExitAnimatedStyles';
            oscar[verify] = offset;
            report = options.bind(zulu)(golf, oscar);
 147:
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
    tango = 'design/components/Coachmark/native/AnimatedCoachmark.native.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) {
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
            zulu = _closure1_slot0;
            offset = _closure1_slot2;
            tango = 6;
            oscar = offset[tango];
            tango = undefined;
            oscar = zulu.bind(tango)(oscar);
            oscar = oscar.AccessibilityPreferencesContext;
            oscar = golf.bind(yankee)(oscar);
            oscar = oscar.reducedMotion;
            golf = oscar.enabled;
            oscar = yankee.useState;
            foxtrot = oscar.bind(yankee)(romeo);
            verify = _closure1_slot3;
            oscar = 2;
            oscar = verify.bind(tango)(foxtrot, oscar);
            verify = oscar[mike];
            mike = 1;
            mike = oscar[mike];
            var _closure2_slot1 = mike;
            mike = 7;
            mike = offset[mike];
            oscar = zulu.bind(tango)(mike);
            zulu = oscar.tooltipEnterExitAnimation;
            mike = options.position;
            oscar = zulu.bind(oscar)(mike);
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
            if(!verify) { _fun00004_ip = 221; continue _fun00003 }
 218:
            golf = options;
 221:
            entity['item'] = golf;
            entity['entering'] = oscar;
            entity['exiting'] = oscar;
            report = _closure1_slot7;
            entity['renderItem'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['AnimatedCoachmark'] = mike;
    return entity;
})();