// app/modules/stage_channels/native/channel_permissions/AddModeratorsActionSheet.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    romeo = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeo;
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
    tango = oscar[entity];
    entity = undefined;
    tango = romeo.bind(entity)(tango);
    var _closure1_slot3 = tango;
    offset = 1;
    tango = oscar[offset];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    golf = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.RowType;
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot9 = tango;
    tango = 7;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {};
    yankee = 8;
    yankee = oscar[yankee];
    yankee = romeo.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.BACKGROUND_MOBILE_SECONDARY;
    verify['backgroundColor'] = yankee;
    verify['flex'] = offset;
    tango['container'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot10 = tango;
    tango = 22;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/stage_channels/native/channel_permissions/AddModeratorsActionSheet.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: AddModeratorsActionSheet
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            sizing = entity.channel;
            var _closure2_slot0 = sizing;
            options = entity.canSkip;
            report = undefined;
            var _closure2_slot1 = report;
            entity = function() { // Original name: _handleAddModeratorsPressed
                tango = undefined;
                entity = undefined;
                zulu = _closure1_slot3;
                mike = function* () {
                    entity = function* () { // Original name: ?anon_0_
                        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(mike) { _fun00004_ip = 215; continue _fun00003 }
 12:
                            mike = undefined;
                            zulu = undefined;
                            tango = 0;
                            var _closure5_slot0 = tango;
                            var _closure5_slot1 = tango;
                            tango = global;
                            options = tango.Object;
                            golf = options.values;
                            tango = _closure2_slot1;
                            options = golf.bind(options)(tango);
                            golf = options.filter;
                            tango = function(argFoo) {
                                entity = argFoo;
                                entity = entity.row;
                                mike = entity.id;
                                entity = null;
                                entity = entity != mike;
                                return entity;
                            };
                            options = golf.bind(options)(tango);
                            golf = options.map;
                            tango = function(argFoo) {
                                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                                    entity = argFoo;
                                    mike = entity.row;
                                    tango = mike.rowType;
                                    entity = _closure1_slot8;
                                    entity = entity.ROLE;
                                    if(!(tango !== entity)) { _fun00006_ip = 119; continue _fun00005 }
 32:
                                    entity = _closure5_slot0;
                                    entity = entity + 1;
                                    _closure5_slot0 = entity;
                                    options = _closure1_slot0;
                                    verify = _closure1_slot2;
                                    entity = 11;
                                    entity = verify[entity];
                                    tango = undefined;
                                    golf = options.bind(tango)(entity);
                                    oscar = golf.createModeratorOverwrite;
                                    report = mike.id;
                                    entity = 12;
                                    entity = verify[entity];
                                    entity = options.bind(tango)(entity);
                                    entity = entity.PermissionOverwriteType;
                                    tango = entity.MEMBER;
                                    entity = _closure2_slot0;
                                    entity = oscar.bind(golf)(report, tango, entity);
                                    _fun00006_ip = 204; continue _fun00005;
 119:
                                    tango = _closure5_slot1;
                                    tango = tango + 1;
                                    _closure5_slot1 = tango;
                                    golf = _closure1_slot0;
                                    options = _closure1_slot2;
                                    zulu = 11;
                                    tango = options[zulu];
                                    zulu = undefined;
                                    oscar = golf.bind(zulu)(tango);
                                    report = oscar.createModeratorOverwrite;
                                    tango = mike.id;
                                    mike = 12;
                                    mike = options[mike];
                                    mike = golf.bind(zulu)(mike);
                                    mike = mike.PermissionOverwriteType;
                                    zulu = mike.ROLE;
                                    mike = _closure2_slot0;
                                    entity = report.bind(oscar)(tango, zulu, mike);
 204:
                                    return entity;
                                }
                            };
                            zulu = golf.bind(options)(tango);
 85: // try_start_0
                            options = _closure1_slot0;
                            verify = _closure1_slot2;
                            golf = 13;
                            golf = verify[golf];
                            options = options.bind(mike)(golf);
                            golf = options.savePermissionUpdates;
                            oscar = _closure2_slot0;
                            oscar = oscar.id;
                            zulu = golf.bind(options)(oscar, zulu);
                            SaveGenerator(address=133);
 131:
                            return zulu;
 133:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                            if(oscar) { _fun00004_ip = 207; continue _fun00003 }
 139:
                            options = _closure1_slot0;
                            oscar = _closure1_slot2;
                            golf = 14;
                            golf = oscar[golf];
                            verify = options.bind(mike)(golf);
                            options = verify.memberOrRoleAddedToast;
                            golf = _closure5_slot1;
                            report = _closure5_slot0;
                            report = options.bind(verify)(golf, report);
                            report = _closure1_slot1;
                            tango = 15;
                            tango = oscar[tango];
                            report = report.bind(mike)(tango);
                            tango = report.hideActionSheet;
                            tango = tango.bind(report)();
 205: // try_end0
                            _fun00004_ip = 212; continue _fun00003;
 207:
                            return zulu;
 210: // catch_target0
                            CatchBlockStart(arg_register=2);
 212:
                            return mike;
 215:
                            return entity;
                        }
                    };
                    return entity;
                };
                tango = zulu.bind(tango)(mike);
                _closure2_slot2 = tango;
                zulu = tango.apply;
                entity = arguments;
                mike = entity;
                entity = this;
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            var _closure2_slot2 = entity;
            entity = _closure1_slot10;
            verify = entity.bind(report)();
            zulu = _closure1_slot5;
            mike = zulu.useState;
            entity = {};
            zulu = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            entity = 2;
            mike = mike.bind(report)(zulu, entity);
            zulu = 0;
            romeo = mike[zulu];
            _closure2_slot1 = romeo;
            entity = 1;
            yankee = mike[entity];
            mike = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 9;
            entity = tango[entity];
            golf = mike.bind(report)(entity);
            oscar = golf.useStateFromStores;
            entity = _closure1_slot7;
            mike = new Array(1);
            mike[0] = entity;
            entity = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zulu = _closure1_slot7;
                    mike = zulu.getGuild;
                    report = _closure2_slot0;
                    entity = null;
                    report = entity == report;
                    entity = undefined;
                    if(report) { _fun00008_ip = 44; continue _fun00007 }
 30:
                    report = _closure2_slot0;
                    tango = report.getGuildId;
                    entity = tango.bind(report)();
 44:
                    entity = mike.bind(zulu)(entity);
                    return entity;
                }
            };
            backup = oscar.bind(golf)(mike, entity);
            mike = _closure1_slot1;
            entity = 10;
            entity = tango[entity];
            entity = mike.bind(report)(entity);
            output = true;
            mike = entity.bind(report)(sizing, output);
            entity = null;
            tango = entity != mike;
            offset = '';
            if(!tango) { _fun00002_ip = 184; continue _fun00001 }
 181:
            offset = mike;
 184:
            if(!(entity != backup)) { _fun00002_ip = 663; continue _fun00001 }
 191:
            mike = global;
            tango = mike.Object;
            mike = tango.keys;
            mike = mike.bind(tango)(romeo);
            mike = mike.length;
            kilo = zulu === mike;
            tango = _closure1_slot9;
            echo = _closure1_slot0;
            update = _closure1_slot2;
            mike = 16;
            mike = update[mike];
            mike = echo.bind(report)(mike);
            zulu = mike.BottomSheet;
            mike = {'scrollable': true, 'header': null, 'startExpanded': true};
            oscar = 17;
            oscar = update[oscar];
            oscar = echo.bind(report)(oscar);
            golf = oscar.BottomSheetTitleHeader;
            oscar = {};
            vacuum = 18;
            source = update[vacuum];
            source = echo.bind(report)(source);
            sequence = source.intl;
            control = sequence.string;
            source = update[vacuum];
            source = echo.bind(report)(source);
            source = source.t;
            source = source.n3bcy8;
            source = control.bind(sequence)(source);
            oscar['title'] = source;
            oscar['subtitle'] = offset;
            offset = 19;
            offset = update[offset];
            offset = echo.bind(report)(offset);
            offset = offset.Button;
            if(!options) { _fun00002_ip = 358; continue _fun00001 }
 355:
            if(kilo) { _fun00002_ip = 441; continue _fun00001 }
 358:
            options = {};
            echo = 'sm';
            options['size'] = echo;
            options['disabled'] = kilo;
            source = _closure1_slot0;
            kilo = _closure1_slot2;
            echo = kilo[vacuum];
            echo = source.bind(report)(echo);
            update = echo.intl;
            echo = update.string;
            kilo = kilo[vacuum];
            kilo = source.bind(report)(kilo);
            kilo = kilo.t;
            kilo = kilo.OYkgVl;
            kilo = echo.bind(update)(kilo);
            options['text'] = kilo;
            kilo = function() { // Original name: handleAddModeratorsPressed
                entity = undefined;
                tango = _closure2_slot2;
                zulu = tango.apply;
                entity = arguments;
                mike = entity;
                entity = this;
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            options['onPress'] = kilo;
            _fun00002_ip = 521; continue _fun00001;
 441:
            kilo = {};
            echo = 'sm';
            kilo['size'] = echo;
            control = _closure1_slot0;
            echo = _closure1_slot2;
            update = echo[vacuum];
            update = control.bind(report)(update);
            source = update.intl;
            update = source.string;
            echo = echo[vacuum];
            echo = control.bind(report)(echo);
            echo = echo.t;
            echo = echo.5WxrcX;
            echo = update.bind(source)(echo);
            kilo['text'] = echo;
            result = function() { // Original name: handleSkip
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 15;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.hideActionSheet;
                mike = mike.bind(zulu)();
                return entity;
            };
            kilo['onPress'] = result;
            options = kilo;
 521:
            options = tango.bind(report)(offset, options);
            oscar['trailing'] = options;
            oscar = tango.bind(report)(golf, oscar);
            mike['header'] = oscar;
            options = _closure1_slot9;
            golf = _closure1_slot6;
            oscar = {};
            verify = verify.container;
            oscar['style'] = verify;
            offset = _closure1_slot1;
            kilo = _closure1_slot2;
            verify = 20;
            verify = kilo[verify];
            offset = offset.bind(report)(verify);
            verify = {};
            verify['inActionSheet'] = output;
            verify['channel'] = sizing;
            verify['guild'] = backup;
            backup = _closure1_slot0;
            foxtrot = 21;
            foxtrot = kilo[foxtrot];
            foxtrot = backup.bind(report)(foxtrot);
            foxtrot = foxtrot.MODERATE_STAGE_CHANNEL_PERMISSIONS;
            verify['permission'] = foxtrot;
            verify['pendingAdditions'] = romeo;
            verify['setPendingAdditions'] = yankee;
            verify = options.bind(report)(offset, verify);
            oscar['children'] = verify;
            oscar = options.bind(report)(golf, oscar);
            mike['children'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return mike;
 663:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();