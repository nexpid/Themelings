// app/modules/oauth2/native/GuildSelector.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    yankee = argBaz;
    report = argCorge;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = report;
    var _closure1_slot3 = golf;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = golf[entity];
    entity = undefined;
    mike = report.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 1;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    mike = mike.View;
    var _closure1_slot5 = mike;
    mike = 2;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    mike = mike.Permissions;
    var _closure1_slot6 = mike;
    mike = 3;
    report = golf[mike];
    report = oscar.bind(entity)(report);
    report = report.jsx;
    var _closure1_slot7 = report;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    mike = mike.jsxs;
    var _closure1_slot8 = mike;
    mike = 4;
    mike = golf[mike];
    options = oscar.bind(entity)(mike);
    report = options.createStyles;
    mike = {};
    verify = {'display': 'flex', 'flexDirection': 'column', 'gap': 8};
    mike['selectorGroup'] = verify;
    verify = {};
    offset = 5;
    romeo = golf[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.BACKGROUND_MOBILE_PRIMARY;
    verify['backgroundColor'] = romeo;
    romeo = golf[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.radii;
    romeo = romeo.xs;
    verify['borderRadius'] = romeo;
    mike['select'] = verify;
    verify = {};
    romeo = golf[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.HEADER_SECONDARY;
    verify['color'] = romeo;
    romeo = '500';
    verify['fontWeight'] = romeo;
    mike['label'] = verify;
    verify = {};
    offset = golf[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.unsafe_rawColors;
    offset = offset.RED_400;
    verify['color'] = offset;
    mike['error'] = verify;
    mike = report.bind(options)(mike);
    var _closure1_slot9 = mike;
    report = 14;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/oauth2/native/GuildSelector.tsx';
    report = oscar.bind(golf)(report);
    tango = function(argFoo) { // Original name: GuildSelector
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            kilo = tango.error;
            mike = tango.selectedGuildId;
            var _closure2_slot0 = mike;
            offset = tango.onGuildChange;
            var _closure2_slot1 = offset;
            zulu = tango.guilds;
            var _closure2_slot2 = zulu;
            options = tango.disabled;
            report = _closure1_slot9;
            tango = undefined;
            yankee = report.bind(tango)();
            golf = _closure1_slot4;
            oscar = golf.useCallback;
            report = new Array(3);
            report[0] = zulu;
            report[1] = offset;
            report[2] = mike;
            mike = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    report = _closure1_slot1;
                    yankee = _closure1_slot3;
                    entity = 6;
                    tango = yankee[entity];
                    entity = undefined;
                    oscar = report.bind(entity)(tango);
                    report = oscar.openLazy;
                    offset = _closure1_slot0;
                    zulu = 8;
                    zulu = yankee[zulu];
                    golf = offset.bind(entity)(zulu);
                    zulu = 7;
                    tango = yankee[zulu];
                    zulu = yankee.paths;
                    tango = golf.bind(entity)(tango, zulu);
                    zulu = {};
                    golf = 9;
                    options = yankee[golf];
                    options = offset.bind(entity)(options);
                    verify = options.intl;
                    options = verify.string;
                    golf = yankee[golf];
                    golf = offset.bind(entity)(golf);
                    golf = golf.t;
                    golf = golf.oM4E1N;
                    golf = options.bind(verify)(golf);
                    zulu['title'] = golf;
                    offset = _closure2_slot2;
                    verify = offset.filter;
                    options = function(argFoo) {
                        tango = _closure1_slot2;
                        zulu = _closure1_slot3;
                        mike = 10;
                        zulu = zulu[mike];
                        mike = undefined;
                        tango = tango.bind(mike)(zulu);
                        zulu = tango.has;
                        mike = argFoo;
                        mike = mike.permissions;
                        entity = _closure1_slot6;
                        entity = entity.MANAGE_GUILD;
                        entity = zulu.bind(tango)(mike, entity);
                        return entity;
                    };
                    offset = verify.bind(offset)(options);
                    verify = offset.map;
                    options = function(argFoo) {
                        mike = argFoo;
                        entity = {};
                        zulu = mike.name;
                        entity['label'] = zulu;
                        mike = mike.id;
                        entity['value'] = mike;
                        return entity;
                    };
                    options = verify.bind(offset)(options);
                    zulu['items'] = options;
                    mike = function(argFoo) { // Original name: onItemSelect
                        zulu = _closure2_slot1;
                        entity = undefined;
                        mike = argFoo;
                        mike = zulu.bind(entity)(mike);
                        zulu = _closure1_slot1;
                        tango = _closure1_slot3;
                        mike = 6;
                        mike = tango[mike];
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.hideActionSheet;
                        mike = 'GuildSelector';
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    };
                    zulu['onItemSelect'] = mike;
                    options = _closure2_slot0;
                    mike = null;
                    options = mike != options;
                    mike = undefined;
                    if(!options) { _fun00004_ip = 197; continue _fun00003 }
 193:
                    mike = _closure2_slot0;
 197:
                    zulu['selectedItem'] = mike;
                    mike = 'GuildSelector';
                    mike = report.bind(oscar)(tango, mike, zulu);
                    return entity;
                }
            };
            backup = oscar.bind(golf)(mike, report);
            mike = zulu.find;
            entity = function(argFoo) {
                entity = argFoo;
                mike = entity.id;
                entity = _closure2_slot0;
                entity = mike === entity;
                return entity;
            };
            output = mike.bind(zulu)(entity);
            zulu = _closure1_slot8;
            mike = _closure1_slot5;
            entity = {};
            report = yankee.selectorGroup;
            entity['style'] = report;
            golf = _closure1_slot7;
            result = _closure1_slot0;
            offset = _closure1_slot3;
            report = 11;
            report = offset[report];
            report = result.bind(tango)(report);
            oscar = report.Text;
            report = {'variant': 'eyebrow', 'color': 'header-secondary'};
            foxtrot = 9;
            romeo = offset[foxtrot];
            romeo = result.bind(tango)(romeo);
            sizing = romeo.intl;
            romeo = sizing.string;
            offset = offset[foxtrot];
            offset = result.bind(tango)(offset);
            offset = offset.t;
            offset = offset.1DXFFR;
            offset = romeo.bind(sizing)(offset);
            report['children'] = offset;
            oscar = golf.bind(tango)(oscar, report);
            report = new Array(4);
            report[0] = oscar;
            sizing = null;
            golf = sizing != kilo;
            oscar = null;
            if(!golf) { _fun00002_ip = 313; continue _fun00001 }
 252:
            golf = '';
            oscar = null;
            if(!(golf !== kilo)) { _fun00002_ip = 313; continue _fun00001 }
 262:
            romeo = _closure1_slot7;
            offset = _closure1_slot0;
            result = _closure1_slot3;
            golf = 12;
            golf = result[golf];
            golf = offset.bind(tango)(golf);
            offset = golf.LegacyText;
            golf = {};
            result = yankee.error;
            golf['style'] = result;
            golf['children'] = kilo;
            oscar = romeo.bind(tango)(offset, golf);
 313:
            report[1] = oscar;
            romeo = _closure1_slot7;
            golf = _closure1_slot0;
            oscar = _closure1_slot3;
            kilo = 13;
            oscar = oscar[kilo];
            oscar = golf.bind(tango)(oscar);
            golf = oscar.FormRow;
            oscar = {};
            result = sizing == output;
            offset = undefined;
            if(result) { _fun00002_ip = 363; continue _fun00001 }
 358:
            offset = output.name;
 363:
            if(!(sizing == offset)) { _fun00002_ip = 419; continue _fun00001 }
 367:
            echo = _closure1_slot0;
            sizing = _closure1_slot3;
            output = sizing[foxtrot];
            output = echo.bind(tango)(output);
            result = output.intl;
            output = result.string;
            sizing = sizing[foxtrot];
            sizing = echo.bind(tango)(sizing);
            sizing = sizing.t;
            sizing = sizing.oM4E1N;
            offset = output.bind(result)(sizing);
 419:
            oscar['label'] = offset;
            oscar['disabled'] = options;
            options = _closure1_slot7;
            offset = _closure1_slot0;
            verify = _closure1_slot3;
            kilo = verify[kilo];
            kilo = offset.bind(tango)(kilo);
            kilo = kilo.FormRow;
            sizing = kilo.Arrow;
            kilo = {};
            kilo = options.bind(tango)(sizing, kilo);
            oscar['trailing'] = kilo;
            kilo = yankee.select;
            oscar['DEPRECATED_style'] = kilo;
            oscar['onPress'] = backup;
            oscar = romeo.bind(tango)(golf, oscar);
            report[2] = oscar;
            oscar = 12;
            oscar = verify[oscar];
            oscar = offset.bind(tango)(oscar);
            golf = oscar.LegacyText;
            oscar = {};
            yankee = yankee.label;
            oscar['style'] = yankee;
            yankee = verify[foxtrot];
            yankee = offset.bind(tango)(yankee);
            romeo = yankee.intl;
            yankee = romeo.format;
            verify = verify[foxtrot];
            verify = offset.bind(tango)(verify);
            verify = verify.t;
            offset = verify.t9Jm9v;
            verify = {};
            verify = yankee.bind(romeo)(offset, verify);
            oscar['children'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[3] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = tango;
    zulu['useStyles'] = mike;
    return entity;
})();