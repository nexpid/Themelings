// app/modules/guild_settings/native/MembersFilterActionSheet.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscar;
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
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot6 = tango;
    romeo = 4;
    tango = oscar[romeo];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot8 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot9 = tango;
    tango = 6;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {};
    offset = 7;
    foxtrot = oscar[offset];
    foxtrot = yankee.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.BACKGROUND_SECONDARY;
    verify['backgroundColor'] = foxtrot;
    tango['background'] = verify;
    verify = {'marginVertical': 8, 'borderRadius': null, 'overflow': 'hidden'};
    foxtrot = oscar[offset];
    foxtrot = yankee.bind(entity)(foxtrot);
    foxtrot = foxtrot.radii;
    foxtrot = foxtrot.lg;
    verify['borderRadius'] = foxtrot;
    tango['listView'] = verify;
    verify = {};
    foxtrot = 12;
    verify['marginHorizontal'] = foxtrot;
    tango['listViewRedesign'] = verify;
    verify = {};
    verify['marginEnd'] = romeo;
    tango['roleDot'] = verify;
    verify = {};
    romeo = 'row';
    verify['flexDirection'] = romeo;
    tango['labelContainer'] = verify;
    verify = {};
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.INTERACTIVE_NORMAL;
    verify['color'] = offset;
    tango['label'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot10 = tango;
    tango = 20;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_settings/native/MembersFilterActionSheet.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: MembersFilterActionSheet
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            mike = entity.guild;
            var _closure2_slot0 = mike;
            zulu = entity.selectedRoleId;
            tango = undefined;
            if(!(zulu === tango)) { _fun00002_ip = 49; continue _fun00001 }
 26:
            report = _closure1_slot7;
            mike = report.getProps;
            mike = mike.bind(report)();
            zulu = mike.selectedRoleId;
 49:
            var _closure2_slot1 = zulu;
            report = entity.onFilterRoleId;
            var _closure2_slot2 = report;
            var _closure2_slot3 = tango;
            var _closure2_slot4 = tango;
            var _closure2_slot5 = tango;
            entity = _closure1_slot10;
            yankee = entity.bind(tango)();
            _closure2_slot3 = yankee;
            options = _closure1_slot0;
            backup = _closure1_slot2;
            entity = 8;
            oscar = backup[entity];
            romeo = options.bind(tango)(oscar);
            verify = romeo.useStateFromStores;
            oscar = _closure1_slot6;
            golf = new Array(1);
            golf[0] = oscar;
            oscar = function() {
                zulu = _closure1_slot6;
                mike = zulu.getRoles;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            golf = verify.bind(romeo)(golf, oscar);
            verify = _closure1_slot1;
            oscar = 9;
            oscar = backup[oscar];
            oscar = verify.bind(tango)(oscar);
            verify = oscar.bind(tango)(golf);
            golf = verify.sortBy;
            oscar = function(argFoo) {
                entity = argFoo;
                entity = entity.position;
                entity = -entity;
                return entity;
            };
            verify = golf.bind(verify)(oscar);
            golf = verify.map;
            oscar = function(argFoo) {
                mike = argFoo;
                entity = {};
                zulu = mike.id;
                entity['value'] = zulu;
                report = entity;
                tango = mike;
                mike = copyDataProperties(report, tango);
                return entity;
            };
            golf = golf.bind(verify)(oscar);
            oscar = golf.value;
            foxtrot = oscar.bind(golf)();
            oscar = foxtrot.length;
            romeo = 1;
            verify = oscar - romeo;
            golf = foxtrot.unshift;
            oscar = foxtrot.splice;
            verify = oscar.bind(foxtrot)(verify, romeo);
            oscar = 0;
            oscar = verify[oscar];
            oscar = golf.bind(foxtrot)(oscar);
            golf = _closure1_slot3;
            verify = golf.useCallback;
            oscar = new Array(2);
            oscar[0] = report;
            oscar[1] = zulu;
            report = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zulu = argFoo;
                    mike = _closure2_slot1;
                    if(!(zulu !== mike)) { _fun00004_ip = 115; continue _fun00003 }
 14:
                    tango = _closure2_slot2;
                    mike = null;
                    if(!(mike == tango)) { _fun00004_ip = 62; continue _fun00003 }
 24:
                    report = _closure1_slot1;
                    tango = _closure1_slot2;
                    mike = 10;
                    tango = tango[mike];
                    mike = undefined;
                    tango = report.bind(mike)(tango);
                    mike = tango.selectRole;
                    mike = mike.bind(tango)(zulu);
                    _fun00004_ip = 73; continue _fun00003;
 62:
                    mike = _closure2_slot2;
                    entity = undefined;
                    entity = mike.bind(entity)(zulu);
 73:
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 11;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.hideActionSheet;
                    entity = 'MembersFilter';
                    entity = mike.bind(zulu)(entity);
 115:
                    entity = undefined;
                    return entity;
                }
            };
            kilo = verify.bind(golf)(report, oscar);
            _closure2_slot4 = kilo;
            entity = backup[entity];
            verify = options.bind(tango)(entity);
            oscar = verify.useStateFromStores;
            entity = _closure1_slot5;
            report = new Array(1);
            report[0] = entity;
            entity = function() {
                entity = _closure1_slot5;
                entity = entity.roleStyle;
                return entity;
            };
            verify = oscar.bind(verify)(report, entity);
            _closure2_slot5 = verify;
            oscar = golf.useContext;
            entity = 12;
            report = backup[entity];
            report = options.bind(tango)(report);
            report = report.RedesignCompatContext;
            romeo = oscar.bind(golf)(report);
            oscar = golf.useCallback;
            report = new Array(4);
            report[0] = kilo;
            report[1] = verify;
            report[2] = zulu;
            report[3] = yankee;
            zulu = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = argFoo;
                    kilo = entity.item;
                    var _closure3_slot0 = kilo;
                    tango = _closure1_slot9;
                    zulu = _closure1_slot4;
                    mike = {};
                    yankee = _closure1_slot8;
                    options = _closure1_slot0;
                    entity = _closure1_slot2;
                    verify = 13;
                    report = entity[verify];
                    entity = undefined;
                    report = options.bind(entity)(report);
                    offset = report.FormRow;
                    report = {};
                    options = {};
                    romeo = _closure2_slot3;
                    romeo = romeo.labelContainer;
                    options['style'] = romeo;
                    foxtrot = _closure2_slot5;
                    romeo = 'dot';
                    foxtrot = romeo === foxtrot;
                    if(!foxtrot) { _fun00006_ip = 107; continue _fun00005 }
 95:
                    sizing = kilo.colorString;
                    romeo = null;
                    foxtrot = romeo != sizing;
 107:
                    if(!foxtrot) { _fun00006_ip = 173; continue _fun00005 }
 110:
                    output = _closure1_slot8;
                    sizing = _closure1_slot0;
                    result = _closure1_slot2;
                    romeo = 14;
                    romeo = result[romeo];
                    romeo = sizing.bind(entity)(romeo);
                    sizing = romeo.RoleDot;
                    romeo = {};
                    result = _closure2_slot3;
                    result = result.roleDot;
                    romeo['containerStyles'] = result;
                    result = kilo.colorString;
                    romeo['color'] = result;
                    foxtrot = output.bind(entity)(sizing, romeo);
 173:
                    romeo = new Array(2);
                    romeo[0] = foxtrot;
                    output = _closure1_slot8;
                    sizing = _closure1_slot0;
                    result = _closure1_slot2;
                    foxtrot = 15;
                    foxtrot = result[foxtrot];
                    foxtrot = sizing.bind(entity)(foxtrot);
                    sizing = foxtrot.Text;
                    foxtrot = {};
                    result = 'text-md/medium';
                    foxtrot['variant'] = result;
                    result = _closure2_slot3;
                    echo = result.label;
                    result = new Array(2);
                    result[0] = echo;
                    echo = kilo.colorString;
                    control = null;
                    update = control != echo;
                    echo = null;
                    if(!update) { _fun00006_ip = 283; continue _fun00005 }
 254:
                    source = _closure2_slot5;
                    update = 'username';
                    echo = null;
                    if(!(update === source)) { _fun00006_ip = 283; continue _fun00005 }
 268:
                    update = {};
                    source = kilo.colorString;
                    update['color'] = source;
                    echo = update;
 283:
                    result[1] = echo;
                    foxtrot['style'] = result;
                    result = kilo.name;
                    foxtrot['children'] = result;
                    foxtrot = output.bind(entity)(sizing, foxtrot);
                    romeo[1] = foxtrot;
                    options['children'] = romeo;
                    options = tango.bind(entity)(zulu, options);
                    report['label'] = options;
                    golf = function() { // Original name: onPress
                        zulu = _closure2_slot4;
                        entity = _closure3_slot0;
                        mike = entity.id;
                        entity = undefined;
                        entity = zulu.bind(entity)(mike);
                        return entity;
                    };
                    report['onPress'] = golf;
                    options = _closure1_slot8;
                    golf = _closure1_slot0;
                    oscar = _closure1_slot2;
                    romeo = oscar[verify];
                    romeo = golf.bind(entity)(romeo);
                    romeo = romeo.FormRow;
                    foxtrot = romeo.Radio;
                    romeo = {};
                    kilo = kilo.id;
                    backup = _closure2_slot1;
                    backup = kilo === backup;
                    romeo['selected'] = backup;
                    romeo = options.bind(entity)(foxtrot, romeo);
                    report['trailing'] = romeo;
                    offset = yankee.bind(entity)(offset, report);
                    report = new Array(2);
                    report[0] = offset;
                    oscar = oscar[verify];
                    oscar = golf.bind(entity)(oscar);
                    golf = oscar.FormDivider;
                    oscar = {};
                    verify = true;
                    oscar['outer'] = verify;
                    oscar = options.bind(entity)(golf, oscar);
                    report[1] = oscar;
                    mike['children'] = report;
                    entity = tango.bind(entity)(zulu, mike);
                    return entity;
                }
            };
            verify = oscar.bind(golf)(zulu, report);
            zulu = _closure1_slot8;
            entity = backup[entity];
            entity = options.bind(tango)(entity);
            mike = entity.RedesignCompat;
            entity = {};
            report = 16;
            report = backup[report];
            report = options.bind(tango)(report);
            oscar = report.ActionSheet;
            report = {};
            golf = true;
            report['scrollable'] = golf;
            golf = 17;
            golf = backup[golf];
            golf = options.bind(tango)(golf);
            kilo = golf.BottomSheetTitleHeader;
            golf = {};
            sizing = 18;
            output = backup[sizing];
            output = options.bind(tango)(output);
            result = output.intl;
            output = result.string;
            sizing = backup[sizing];
            sizing = options.bind(tango)(sizing);
            sizing = sizing.t;
            sizing = sizing.pEasFR;
            sizing = output.bind(result)(sizing);
            golf['title'] = sizing;
            golf = zulu.bind(tango)(kilo, golf);
            report['header'] = golf;
            golf = 19;
            golf = backup[golf];
            golf = options.bind(tango)(golf);
            options = golf.BottomSheetFlatList;
            golf = {};
            golf['data'] = foxtrot;
            offset = function(argFoo) { // Original name: keyExtractor
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            golf['keyExtractor'] = offset;
            golf['renderItem'] = verify;
            offset = yankee.listView;
            verify = new Array(2);
            verify[0] = offset;
            offset = undefined;
            if(!romeo) { _fun00002_ip = 589; continue _fun00001 }
 583:
            offset = yankee.listViewRedesign;
 589:
            verify[1] = offset;
            golf['contentContainerStyle'] = verify;
            verify = 10;
            golf['initialNumToRender'] = verify;
            verify = false;
            golf['removeClippedSubviews'] = verify;
            golf = zulu.bind(tango)(options, golf);
            report['children'] = golf;
            report = zulu.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();