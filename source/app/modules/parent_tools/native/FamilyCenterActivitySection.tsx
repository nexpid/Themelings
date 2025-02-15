// app/modules/parent_tools/native/FamilyCenterActivitySection.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    romeo = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeo;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: FamilyCenterActivitySectionHeader
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            zulu = entity.displayType;
            entity = _closure1_slot11;
            tango = undefined;
            yankee = entity.bind(tango)();
            mike = _closure1_slot1;
            report = _closure1_slot2;
            entity = 6;
            entity = report[entity];
            entity = mike.bind(tango)(entity);
            verify = entity.bind(tango)();
            mike = _closure1_slot7;
            entity = mike.get;
            options = entity.bind(mike)(zulu);
            mike = _closure1_slot0;
            entity = 7;
            entity = report[entity];
            mike = mike.bind(tango)(entity);
            entity = mike.useActionsForDisplayType;
            entity = entity.bind(mike)(zulu);
            oscar = null;
            mike = oscar == options;
            foxtrot = undefined;
            if(mike) { _fun00002_ip = 114; continue _fun00001 }
 98:
            mike = options.sectionHeader;
            entity = entity.length;
            foxtrot = mike.bind(options)(entity);
 114:
            mike = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 8;
            entity = zulu[entity];
            zulu = mike.bind(tango)(entity);
            mike = zulu.useIsEligibleForFamilyCenterVCJoin;
            entity = {};
            report = 'family_center_activity_section_native';
            entity['location'] = report;
            report = mike.bind(zulu)(entity);
            mike = oscar == options;
            entity = undefined;
            if(mike) { _fun00002_ip = 172; continue _fun00001 }
 166:
            entity = options.sectionDescription;
 172:
            offset = null;
            if(!(tango !== entity)) { _fun00002_ip = 212; continue _fun00001 }
 178:
            mike = oscar == options;
            entity = undefined;
            if(mike) { _fun00002_ip = 209; continue _fun00001 }
 187:
            zulu = options.sectionDescription;
            mike = oscar != verify;
            if(!mike) { _fun00002_ip = 203; continue _fun00001 }
 200:
            mike = verify;
 203:
            entity = zulu.bind(options)(mike, report);
 209:
            offset = entity;
 212:
            zulu = _closure1_slot10;
            mike = _closure1_slot6;
            entity = {};
            verify = _closure1_slot9;
            options = _closure1_slot0;
            report = _closure1_slot2;
            romeo = 9;
            report = report[romeo];
            report = options.bind(tango)(report);
            options = report.Text;
            report = {'variant': 'eyebrow', 'color': 'header-secondary'};
            backup = yankee.header;
            report['style'] = backup;
            report['children'] = foxtrot;
            options = verify.bind(tango)(options, report);
            report = new Array(2);
            report[0] = options;
            oscar = null;
            if(!(oscar !== offset)) { _fun00002_ip = 353; continue _fun00001 }
 298:
            verify = _closure1_slot9;
            options = _closure1_slot0;
            golf = _closure1_slot2;
            golf = golf[romeo];
            golf = options.bind(tango)(golf);
            options = golf.Text;
            golf = {'variant': 'text-sm/medium', 'color': 'text-muted'};
            yankee = yankee.description;
            golf['style'] = yankee;
            golf['children'] = offset;
            oscar = verify.bind(tango)(options, golf);
 353:
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = romeo.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    golf = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.ActivityIndicator;
    var _closure1_slot5 = golf;
    tango = tango.View;
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.ACTION_TO_TEXT;
    var _closure1_slot7 = golf;
    tango = tango.FAMILY_CENTER_ITEMS_SHOWN_INCREMENTS;
    var _closure1_slot8 = tango;
    offset = 4;
    tango = oscar[offset];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot9 = tango;
    tango = oscar[offset];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot10 = tango;
    tango = 5;
    golf = oscar[tango];
    verify = report.bind(entity)(golf);
    options = verify.createStyles;
    golf = {};
    yankee = {};
    golf['header'] = yankee;
    yankee = {};
    golf['description'] = yankee;
    golf = options.bind(verify)(golf);
    var _closure1_slot11 = golf;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {'display': 'flex', 'marginBottom': 20};
    tango['container'] = verify;
    verify = {};
    yankee = 'hidden';
    verify['overflow'] = yankee;
    tango['actionContainer'] = verify;
    verify = {'display': 'flex', 'flexDirection': 'row', 'flex': 1, 'alignItems': 'center', 'justifyContent': 'center', 'width': '100%'};
    tango['loadMoreContainer'] = verify;
    verify = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center'};
    yankee = 10;
    foxtrot = oscar[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.radii;
    foxtrot = foxtrot.sm;
    verify['borderBottomRightRadius'] = foxtrot;
    foxtrot = oscar[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.radii;
    foxtrot = foxtrot.sm;
    verify['borderBottomLeftRadius'] = foxtrot;
    yankee = oscar[yankee];
    yankee = romeo.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.BACKGROUND_ACCENT;
    verify['backgroundColor'] = yankee;
    yankee = '60%';
    verify['width'] = yankee;
    tango['loadMore'] = verify;
    verify = {};
    verify['paddingVertical'] = offset;
    tango['loadMoreButton'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot12 = tango;
    tango = 15;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/parent_tools/native/FamilyCenterActivitySection.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: FamilyCenterActivitySection
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            foxtrot = entity.displayType;
            var _closure2_slot0 = foxtrot;
            entity = _closure1_slot12;
            tango = undefined;
            output = entity.bind(tango)();
            zulu = _closure1_slot0;
            report = _closure1_slot2;
            mike = 7;
            entity = report[mike];
            oscar = zulu.bind(tango)(entity);
            entity = oscar.useActionsForDisplayType;
            entity = entity.bind(oscar)(foxtrot);
            mike = report[mike];
            oscar = zulu.bind(tango)(mike);
            mike = oscar.useActionTotalsForDisplayType;
            golf = mike.bind(oscar)(foxtrot);
            mike = 11;
            mike = report[mike];
            report = zulu.bind(tango)(mike);
            zulu = report.useFamilyCenterActions;
            mike = {};
            mike = zulu.bind(report)(mike);
            zulu = mike.loadMore;
            var _closure2_slot1 = zulu;
            offset = mike.isMoreLoading;
            yankee = _closure1_slot4;
            report = yankee.useState;
            mike = _closure1_slot8;
            oscar = report.bind(yankee)(mike);
            report = _closure1_slot3;
            mike = 2;
            verify = report.bind(tango)(oscar, mike);
            mike = 0;
            oscar = verify[mike];
            report = 1;
            report = verify[report];
            var _closure2_slot2 = report;
            report = entity.slice;
            oscar = report.bind(entity)(mike, oscar);
            verify = yankee.useCallback;
            report = new Array(2);
            report[0] = zulu;
            report[1] = foxtrot;
            zulu = function() {
                tango = _closure2_slot2;
                entity = undefined;
                zulu = function(argFoo) {
                    mike = _closure1_slot8;
                    entity = argFoo;
                    entity = entity + mike;
                    return entity;
                };
                zulu = tango.bind(entity)(zulu);
                zulu = _closure2_slot1;
                mike = _closure2_slot0;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            romeo = verify.bind(yankee)(zulu, report);
            entity = entity.length;
            if(!(mike !== entity)) { _fun00004_ip = 647; continue _fun00003 }
 221:
            mike = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 12;
            zulu = verify[entity];
            zulu = mike.bind(tango)(zulu);
            report = zulu.intl;
            zulu = report.formatToPlainString;
            entity = verify[entity];
            entity = mike.bind(tango)(entity);
            entity = entity.t;
            mike = entity.7dMmJS;
            entity = {};
            verify = global;
            sizing = verify.Math;
            kilo = sizing.min;
            verify = oscar.length;
            yankee = golf - verify;
            verify = _closure1_slot8;
            verify = kilo.bind(sizing)(yankee, verify);
            entity['pageSize'] = verify;
            result = zulu.bind(report)(mike, entity);
            zulu = _closure1_slot10;
            mike = _closure1_slot6;
            entity = {};
            report = output.container;
            entity['style'] = report;
            yankee = _closure1_slot9;
            verify = _closure1_slot13;
            report = {};
            report['displayType'] = foxtrot;
            verify = yankee.bind(tango)(verify, report);
            report = new Array(3);
            report[0] = verify;
            verify = oscar.map;
            options = function(argFoo) {
                entity = argFoo;
                report = _closure1_slot9;
                zulu = _closure1_slot1;
                tango = _closure1_slot2;
                mike = 13;
                mike = tango[mike];
                tango = undefined;
                zulu = zulu.bind(tango)(mike);
                mike = {};
                mike['action'] = entity;
                entity = entity.event_id;
                entity = report.bind(tango)(zulu, mike, entity);
                return entity;
            };
            options = verify.bind(oscar)(options);
            report[1] = options;
            oscar = oscar.length;
            golf = oscar < golf;
            oscar = null;
            if(!golf) { _fun00004_ip = 631; continue _fun00003 }
 402:
            verify = _closure1_slot9;
            options = _closure1_slot6;
            golf = {};
            yankee = output.loadMoreContainer;
            golf['style'] = yankee;
            foxtrot = _closure1_slot9;
            if(offset) { _fun00004_ip = 555; continue _fun00003 }
 432:
            kilo = _closure1_slot0;
            echo = _closure1_slot2;
            offset = 14;
            offset = echo[offset];
            offset = kilo.bind(tango)(offset);
            yankee = offset.PressableOpacity;
            offset = {};
            sizing = output.loadMore;
            offset['style'] = sizing;
            offset['accessibilityLabel'] = result;
            sizing = 'button';
            offset['accessibilityRole'] = sizing;
            offset['onPress'] = romeo;
            sizing = _closure1_slot9;
            romeo = 9;
            romeo = echo[romeo];
            romeo = kilo.bind(tango)(romeo);
            kilo = romeo.Text;
            romeo = {'style': null, 'variant': 'text-xs/semibold', 'color': 'always-white'};
            echo = output.loadMoreButton;
            romeo['style'] = echo;
            romeo['children'] = result;
            romeo = sizing.bind(tango)(kilo, romeo);
            offset['children'] = romeo;
            offset = foxtrot.bind(tango)(yankee, offset);
            _fun00004_ip = 621; continue _fun00003;
 555:
            romeo = _closure1_slot6;
            yankee = {};
            kilo = output.loadMore;
            yankee['style'] = kilo;
            sizing = _closure1_slot9;
            kilo = _closure1_slot5;
            backup = {'style': null, 'animating': true, 'color': '#fff', 'size': 'small'};
            output = output.loadMoreButton;
            backup['style'] = output;
            backup = sizing.bind(tango)(kilo, backup);
            yankee['children'] = backup;
            offset = foxtrot.bind(tango)(romeo, yankee);
 621:
            golf['children'] = offset;
            oscar = verify.bind(tango)(options, golf);
 631:
            report[2] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
 647:
            entity = null;
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();