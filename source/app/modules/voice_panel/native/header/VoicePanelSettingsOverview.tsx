// app/modules/voice_panel/native/header/VoicePanelSettingsOverview.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    backup = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = backup;
    var _closure1_slot2 = golf;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun00002_ip = 55; continue _fun00001 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun00002_ip = 345; continue _fun00001 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun00002_ip = 323; continue _fun00001 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun00002_ip = 270; continue _fun00001 }
 110:
            golf = {};
            verify = golf.toString;
            golf = verify.call;
            yankee = golf.bind(verify)(zulu);
            offset = yankee.slice;
            verify = 8;
            golf = -1;
            verify = offset.bind(yankee)(verify, golf);
            golf = 'Object';
            golf = golf === verify;
            if(!golf) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot23;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golf = _closure1_slot23;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golf = report.TypeError;
            report = golf.prototype;
            oscar = Object.create(report, {constructor: {value: golf}});
            foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscar;
            report = new backup[golf](foxtrot, romeo);
            report = report instanceof Object ? report : oscar;
            throw report;
 323:
            if(!tango) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    mike = false;
                    entity['done'] = mike;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = parseFloat(mike);
                    tango = mike + 1;
                    _closure2_slot1 = tango;
                    mike = zulu[mike];
                    entity['value'] = mike;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    mike = {};
                    zulu = true;
                    mike['done'] = zulu;
                    entity = mike;
 67:
                    return entity;
                }
            };
            return entity;
 345:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    mike = function(argFoo) { // Original name: VoicePanelSettingsOverviewHeader
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            mike = argFoo;
            zulu = mike.guildId;
            var _closure2_slot0 = zulu;
            golf = mike.channelId;
            var _closure2_slot1 = golf;
            mike = _closure1_slot21;
            tango = undefined;
            offset = mike.bind(tango)();
            output = _closure1_slot0;
            kilo = _closure1_slot2;
            mike = 17;
            zulu = kilo[mike];
            options = output.bind(tango)(zulu);
            oscar = options.useStateFromStores;
            zulu = _closure1_slot12;
            report = new Array(1);
            report[0] = zulu;
            zulu = function() {
                zulu = _closure1_slot12;
                entity = zulu.getVoiceStatesForChannelAlt;
                oscar = _closure2_slot1;
                report = _closure2_slot0;
                entity = entity.bind(zulu)(oscar, report);
                golf = entity.slice;
                tango = 0;
                zulu = 2;
                golf = golf.bind(entity)(tango, zulu);
                tango = golf.map;
                zulu = function(argFoo) {
                    entity = argFoo;
                    entity = entity.user;
                    return entity;
                };
                tango = tango.bind(golf)(zulu);
                golf = _closure1_slot1;
                zulu = _closure1_slot2;
                mike = 18;
                mike = zulu[mike];
                zulu = undefined;
                mike = golf.bind(zulu)(mike);
                golf = entity.length;
                entity = tango.length;
                options = golf - entity;
                romeo = undefined;
                yankee = report;
                offset = oscar;
                verify = tango;
                entity = romeo[mike](yankee, offset, verify, options, golf);
                return entity;
            };
            backup = oscar.bind(options)(report, zulu);
            mike = kilo[mike];
            oscar = output.bind(tango)(mike);
            report = oscar.useStateFromStores;
            mike = _closure1_slot8;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = new Array(1);
            mike[0] = golf;
            entity = function() {
                zulu = _closure1_slot8;
                mike = zulu.getChannel;
                entity = _closure2_slot1;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike = report.bind(oscar)(zulu, entity, mike);
            verify = _closure1_slot1;
            entity = 19;
            entity = kilo[entity];
            entity = verify.bind(tango)(entity);
            echo = entity.bind(tango)(mike);
            entity = 20;
            entity = kilo[entity];
            zulu = output.bind(tango)(entity);
            mike = zulu.useIsSecureFramesUIEnabled;
            entity = {};
            entity['channelId'] = golf;
            report = 'VoicePanelSettingsOverviewHeader';
            entity['location'] = report;
            oscar = mike.bind(zulu)(entity);
            entity = 21;
            entity = kilo[entity];
            zulu = output.bind(tango)(entity);
            mike = zulu.useIsCallSecureFramesVerified;
            entity = {};
            entity['channelId'] = golf;
            entity['location'] = report;
            sizing = mike.bind(zulu)(entity);
            zulu = _closure1_slot19;
            golf = 22;
            entity = kilo[golf];
            mike = verify.bind(tango)(entity);
            entity = {};
            report = offset.headerContainer;
            entity['style'] = report;
            yankee = _closure1_slot18;
            foxtrot = 23;
            report = kilo[foxtrot];
            options = verify.bind(tango)(report);
            report = {};
            foxtrot = kilo[foxtrot];
            foxtrot = output.bind(tango)(foxtrot);
            foxtrot = foxtrot.VoicePanelEmojiVariant;
            foxtrot = foxtrot.VoicePanelSettingsHeader;
            report['variant'] = foxtrot;
            options = yankee.bind(tango)(options, report);
            report = new Array(4);
            report[0] = options;
            foxtrot = _closure1_slot19;
            options = kilo[golf];
            verify = verify.bind(tango)(options);
            options = {};
            yankee = offset.channelTitleWrapper;
            options['style'] = yankee;
            result = _closure1_slot18;
            yankee = 24;
            kilo = kilo[yankee];
            kilo = output.bind(tango)(kilo);
            output = kilo.Text;
            kilo = {'style': null, 'variant': 'heading-lg/bold', 'lineClamp': 1, 'accessibilityRole': 'header'};
            update = offset.channelTitle;
            kilo['style'] = update;
            kilo['children'] = echo;
            output = result.bind(tango)(output, kilo);
            kilo = new Array(2);
            kilo[0] = output;
            if(!sizing) { _fun00008_ip = 512; continue _fun00007 }
 405:
            echo = _closure1_slot18;
            vacuum = _closure1_slot0;
            sequence = _closure1_slot2;
            output = 25;
            output = sequence[output];
            output = vacuum.bind(tango)(output);
            result = output.ShieldLockIcon;
            output = {};
            update = offset.secureFramesIcon;
            output['style'] = update;
            update = 'xs';
            output['size'] = update;
            update = 26;
            source = sequence[update];
            source = vacuum.bind(tango)(source);
            control = source.intl;
            source = control.string;
            update = sequence[update];
            update = vacuum.bind(tango)(update);
            update = update.t;
            update = update.mR9cf3;
            update = source.bind(control)(update);
            output['accessibilityLabel'] = update;
            sizing = echo.bind(tango)(result, output);
 512:
            kilo[1] = sizing;
            options['children'] = kilo;
            options = foxtrot.bind(tango)(verify, options);
            report[1] = options;
            foxtrot = _closure1_slot18;
            verify = _closure1_slot0;
            options = _closure1_slot2;
            options = options[yankee];
            options = verify.bind(tango)(options);
            verify = options.Text;
            options = {'style': null, 'variant': 'text-sm/medium', 'accessibilityRole': 'summary'};
            kilo = offset.channelSubtitle;
            options['style'] = kilo;
            options['children'] = backup;
            options = foxtrot.bind(tango)(verify, options);
            report[2] = options;
            if(!oscar) { _fun00008_ip = 792; continue _fun00007 }
 602:
            verify = _closure1_slot19;
            options = _closure1_slot1;
            result = _closure1_slot2;
            golf = result[golf];
            options = options.bind(tango)(golf);
            golf = {};
            offset = offset.secureFrames;
            golf['style'] = offset;
            backup = _closure1_slot18;
            output = _closure1_slot0;
            offset = 27;
            offset = result[offset];
            offset = output.bind(tango)(offset);
            foxtrot = offset.LockIcon;
            offset = {'size': 'xxs', 'color': 'status-positive'};
            foxtrot = backup.bind(tango)(foxtrot, offset);
            offset = new Array(2);
            offset[0] = foxtrot;
            foxtrot = _closure1_slot18;
            yankee = result[yankee];
            yankee = output.bind(tango)(yankee);
            romeo = yankee.Text;
            yankee = {'variant': 'text-xs/medium', 'color': 'status-positive'};
            backup = 26;
            kilo = result[backup];
            kilo = output.bind(tango)(kilo);
            sizing = kilo.intl;
            kilo = sizing.string;
            backup = result[backup];
            backup = output.bind(tango)(backup);
            backup = backup.t;
            backup = backup.3BogKS;
            backup = kilo.bind(sizing)(backup);
            yankee['children'] = backup;
            yankee = foxtrot.bind(tango)(romeo, yankee);
            offset[1] = yankee;
            golf['children'] = offset;
            oscar = verify.bind(tango)(options, golf);
 792:
            report[3] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot24 = mike;
    entity = function() { // Original name: ShareActivityLogsButton
        tango = _closure1_slot3;
        zulu = tango.useCallback;
        mike = function() {
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 28;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.stringify;
                oscar = _closure1_slot15;
                mike = new Array(1);
                mike[0] = oscar;
                mike = zulu.bind(tango)(mike);
                zulu = '';
                if(!(zulu !== mike)) { _fun00010_ip = 124; continue _fun00009 }
 56:
                tango = _closure1_slot0;
                oscar = _closure1_slot2;
                zulu = 30;
                zulu = oscar[zulu];
                golf = tango.bind(entity)(zulu);
                zulu = golf.closeVoicePanelSettingsActionSheet;
                zulu = zulu.bind(golf)();
                zulu = 31;
                zulu = oscar[zulu];
                oscar = tango.bind(entity)(zulu);
                tango = oscar.showShareActionSheet;
                zulu = {};
                zulu['message'] = mike;
                mike = 'Activity Logs';
                mike = tango.bind(oscar)(zulu, mike);
                _fun00010_ip = 222; continue _fun00009;
 124:
                zulu = _closure1_slot1;
                verify = _closure1_slot2;
                mike = 29;
                mike = verify[mike];
                tango = zulu.bind(entity)(mike);
                zulu = tango.open;
                mike = {};
                oscar = 'EMBEDDED_ACTIVITIES_SHARE_EMPTY_LOGS_ERROR_MESSAGE';
                mike['key'] = oscar;
                options = _closure1_slot0;
                report = 26;
                oscar = verify[report];
                oscar = options.bind(entity)(oscar);
                golf = oscar.intl;
                oscar = golf.string;
                report = verify[report];
                report = options.bind(entity)(report);
                report = report.t;
                report = report.i+9VW1;
                report = oscar.bind(golf)(report);
                mike['content'] = report;
                mike = zulu.bind(tango)(mike);
 222:
                return entity;
            }
        };
        entity = new Array(0);
        golf = zulu.bind(tango)(mike, entity);
        tango = _closure1_slot18;
        oscar = _closure1_slot0;
        options = _closure1_slot2;
        entity = 32;
        entity = options[entity];
        zulu = undefined;
        entity = oscar.bind(zulu)(entity);
        mike = entity.TableRow;
        entity = {};
        entity['onPress'] = golf;
        offset = _closure1_slot18;
        golf = 33;
        golf = options[golf];
        golf = oscar.bind(zulu)(golf);
        verify = golf.TableRowIcon;
        golf = {};
        yankee = 34;
        yankee = options[yankee];
        yankee = oscar.bind(zulu)(yankee);
        yankee = yankee.WrenchIcon;
        golf['IconComponent'] = yankee;
        romeo = _closure1_slot1;
        yankee = 35;
        yankee = options[yankee];
        yankee = romeo.bind(zulu)(yankee);
        golf['source'] = yankee;
        golf = offset.bind(zulu)(verify, golf);
        entity['icon'] = golf;
        golf = 26;
        verify = options[golf];
        verify = oscar.bind(zulu)(verify);
        offset = verify.intl;
        verify = offset.string;
        golf = options[golf];
        golf = oscar.bind(zulu)(golf);
        golf = golf.t;
        golf = golf.iQzQs7;
        golf = verify.bind(offset)(golf);
        entity['label'] = golf;
        golf = _closure1_slot18;
        report = 36;
        report = options[report];
        report = oscar.bind(zulu)(report);
        oscar = report.TableRowArrow;
        report = {};
        report = golf.bind(zulu)(oscar, report);
        entity['trailing'] = report;
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    var _closure1_slot25 = entity;
    entity = function() { // Original name: ActivityDebugToggle
        options = _closure1_slot0;
        verify = _closure1_slot2;
        mike = 17;
        mike = verify[mike];
        tango = undefined;
        oscar = options.bind(tango)(mike);
        report = oscar.useStateFromStores;
        mike = _closure1_slot6;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = function() {
            mike = _closure1_slot6;
            entity = mike.getShowActivitiesDebugOverlay;
            entity = entity.bind(mike)();
            return entity;
        };
        golf = report.bind(oscar)(zulu, mike);
        report = _closure1_slot3;
        zulu = report.useCallback;
        mike = function(argFoo) {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 37;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            report = 'EMBEDDED_ACTIVITY_SET_DEBUG_OVERLAY_VISIBILITY';
            mike['type'] = report;
            report = argFoo;
            mike['visible'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity = new Array(0);
        oscar = zulu.bind(report)(mike, entity);
        zulu = _closure1_slot18;
        entity = 38;
        entity = verify[entity];
        entity = options.bind(tango)(entity);
        mike = entity.TableSwitchRow;
        entity = {};
        yankee = _closure1_slot18;
        report = 33;
        report = verify[report];
        report = options.bind(tango)(report);
        offset = report.TableRowIcon;
        report = {};
        foxtrot = 34;
        foxtrot = verify[foxtrot];
        foxtrot = options.bind(tango)(foxtrot);
        foxtrot = foxtrot.WrenchIcon;
        report['IconComponent'] = foxtrot;
        foxtrot = _closure1_slot1;
        romeo = 35;
        romeo = verify[romeo];
        romeo = foxtrot.bind(tango)(romeo);
        report['source'] = romeo;
        report = yankee.bind(tango)(offset, report);
        entity['icon'] = report;
        report = 26;
        offset = verify[report];
        offset = options.bind(tango)(offset);
        romeo = offset.intl;
        yankee = romeo.string;
        offset = verify[report];
        offset = options.bind(tango)(offset);
        offset = offset.t;
        offset = offset.qv5/SE;
        offset = yankee.bind(romeo)(offset);
        entity['accessibilityHint'] = offset;
        entity['value'] = golf;
        entity['onValueChange'] = oscar;
        oscar = verify[report];
        oscar = options.bind(tango)(oscar);
        golf = oscar.intl;
        oscar = golf.string;
        report = verify[report];
        report = options.bind(tango)(report);
        report = report.t;
        report = report.qv5/SE;
        report = oscar.bind(golf)(report);
        entity['label'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot26 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, report);
    entity = 0;
    options = golf[entity];
    report = argCorge;
    entity = undefined;
    options = report.bind(entity)(options);
    var _closure1_slot3 = options;
    report = 1;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.Platform;
    report = 2;
    report = golf[report];
    report = backup.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 3;
    report = golf[report];
    report = backup.bind(entity)(report);
    var _closure1_slot5 = report;
    romeo = 4;
    report = golf[romeo];
    report = backup.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 5;
    report = golf[report];
    report = backup.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 6;
    report = golf[report];
    report = backup.bind(entity)(report);
    var _closure1_slot8 = report;
    report = 7;
    report = golf[report];
    report = backup.bind(entity)(report);
    var _closure1_slot9 = report;
    report = 8;
    report = golf[report];
    report = backup.bind(entity)(report);
    var _closure1_slot10 = report;
    report = 9;
    report = golf[report];
    report = backup.bind(entity)(report);
    var _closure1_slot11 = report;
    report = 10;
    report = golf[report];
    report = backup.bind(entity)(report);
    var _closure1_slot12 = report;
    report = 11;
    report = golf[report];
    report = oscar.bind(entity)(report);
    verify = report.AnalyticsSections;
    var _closure1_slot13 = verify;
    verify = report.Permissions;
    var _closure1_slot14 = verify;
    report = report.RPC_APPLICATION_LOGGING_CATEGORY;
    var _closure1_slot15 = report;
    report = 12;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.isStreamParticipant;
    var _closure1_slot16 = report;
    report = 13;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.SECURE_FRAMES_CALL_VERIFICATION_BOTTOM_SHEET_KEY;
    var _closure1_slot17 = report;
    report = 14;
    verify = golf[report];
    verify = oscar.bind(entity)(verify);
    verify = verify.jsx;
    var _closure1_slot18 = verify;
    verify = golf[report];
    verify = oscar.bind(entity)(verify);
    verify = verify.jsxs;
    var _closure1_slot19 = verify;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.Fragment;
    var _closure1_slot20 = report;
    report = 15;
    report = golf[report];
    offset = oscar.bind(entity)(report);
    verify = offset.createStyles;
    report = {};
    kilo = 'center';
    yankee = {'paddingTop': 24, 'alignItems': 'center'};
    report['headerContainer'] = yankee;
    yankee = {'width': 80, 'height': 80, 'borderRadius': null, 'justifyContent': 'center', 'alignItems': 'center'};
    foxtrot = 16;
    sizing = golf[foxtrot];
    sizing = backup.bind(entity)(sizing);
    sizing = sizing.radii;
    sizing = sizing.round;
    yankee['borderRadius'] = sizing;
    report['headerEmojiContainer'] = yankee;
    yankee = {'fontSize': 32, 'textAlignVertical': 'center'};
    report['headerEmoji'] = yankee;
    yankee = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center', 'marginTop': 16};
    report['channelTitleWrapper'] = yankee;
    yankee = {};
    yankee['textAlign'] = kilo;
    report['channelTitle'] = yankee;
    yankee = {'marginTop': 4, 'marginHorizontal': 16, 'textAlign': 'center'};
    report['channelSubtitle'] = yankee;
    yankee = {'width': 32, 'height': 32, 'borderRadius': null, 'justifyContent': 'center', 'alignItems': 'center'};
    kilo = golf[foxtrot];
    kilo = backup.bind(entity)(kilo);
    kilo = kilo.radii;
    kilo = kilo.round;
    yankee['borderRadius'] = kilo;
    kilo = golf[foxtrot];
    kilo = backup.bind(entity)(kilo);
    kilo = kilo.colors;
    kilo = kilo.BACKGROUND_SECONDARY;
    yankee['backgroundColor'] = kilo;
    report['settingsIconContainer'] = yankee;
    yankee = {'textAlign': 'center', 'fontSize': 16};
    report['settingsIcon'] = yankee;
    yankee = {'width': 20, 'height': 20};
    report['settingsFastIcon'] = yankee;
    yankee = {'width': 40, 'height': 40};
    report['headerFastImage'] = yankee;
    yankee = {'flexDirection': 'row', 'alignItems': 'center', 'backgroundColor': null, 'borderRadius': null, 'marginTop': 8, 'padding': 4, 'gap': 4};
    kilo = golf[foxtrot];
    kilo = backup.bind(entity)(kilo);
    kilo = kilo.colors;
    kilo = kilo.BG_SURFACE_RAISED;
    yankee['backgroundColor'] = kilo;
    foxtrot = golf[foxtrot];
    foxtrot = backup.bind(entity)(foxtrot);
    foxtrot = foxtrot.radii;
    foxtrot = foxtrot.sm;
    yankee['borderRadius'] = foxtrot;
    report['secureFrames'] = yankee;
    yankee = {};
    yankee['marginStart'] = romeo;
    report['secureFramesIcon'] = yankee;
    report = verify.bind(offset)(report);
    var _closure1_slot21 = report;
    report = options.memo;
    tango = function(argFoo) { // Original name: VoicePanelSettingsOverview
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            kilo = entity.guildId;
            var _closure2_slot0 = kilo;
            foxtrot = entity.channelId;
            var _closure2_slot1 = foxtrot;
            mike = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 17;
            report = zulu[entity];
            tango = undefined;
            options = mike.bind(tango)(report);
            golf = options.useStateFromStores;
            report = _closure1_slot8;
            oscar = new Array(1);
            oscar[0] = report;
            report = function() {
                zulu = _closure1_slot8;
                mike = zulu.getChannel;
                entity = _closure2_slot1;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            sierra = golf.bind(options)(oscar, report);
            var _closure2_slot2 = sierra;
            report = 39;
            report = zulu[report];
            report = mike.bind(tango)(report);
            oscar = report.DeveloperMode;
            report = oscar.useSetting;
            options = report.bind(oscar)();
            report = zulu[entity];
            verify = mike.bind(tango)(report);
            golf = verify.useStateFromStores;
            report = _closure1_slot12;
            oscar = new Array(1);
            oscar[0] = report;
            report = function() {
                tango = _closure1_slot12;
                zulu = tango.getVoiceStatesForChannelAlt;
                mike = _closure2_slot1;
                entity = _closure2_slot0;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            source = golf.bind(verify)(oscar, report);
            var _closure2_slot3 = source;
            report = zulu[entity];
            offset = mike.bind(tango)(report);
            verify = offset.useStateFromStoresArray;
            report = _closure1_slot11;
            golf = new Array(1);
            golf[0] = report;
            oscar = new Array(2);
            oscar[0] = sierra;
            oscar[1] = source;
            report = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    entity = _closure2_slot2;
                    options = null;
                    if(!(options != entity)) { _fun00014_ip = 194; continue _fun00013 }
 16:
                    zulu = _closure2_slot2;
                    entity = zulu.isPrivate;
                    entity = entity.bind(zulu)();
                    if(!entity) { _fun00014_ip = 194; continue _fun00013 }
 36:
                    entity = global;
                    tango = entity.Set;
                    report = _closure2_slot3;
                    zulu = report.map;
                    entity = function(argFoo) {
                        entity = argFoo;
                        entity = entity.user;
                        entity = entity.id;
                        return entity;
                    };
                    romeo = zulu.bind(report)(entity);
                    zulu = tango.prototype;
                    zulu = Object.create(zulu, {constructor: {value: tango}});
                    foxtrot = zulu;
                    entity = new foxtrot[tango](romeo, yankee);
                    golf = entity instanceof Object ? entity : zulu;
                    entity = new Array(0);
                    zulu = _closure1_slot22;
                    mike = _closure2_slot2;
                    mike = mike.recipients;
                    report = undefined;
                    tango = zulu.bind(report)(mike);
                    zulu = tango.bind(report)();
                    mike = zulu.done;
                    if(mike) { _fun00014_ip = 192; continue _fun00013 }
 127:
                    yankee = zulu.value;
                    verify = _closure1_slot11;
                    mike = verify.getUser;
                    verify = mike.bind(verify)(yankee);
                    mike = options == verify;
                    if(mike) { _fun00014_ip = 164; continue _fun00013 }
 154:
                    offset = golf.has;
                    mike = offset.bind(golf)(yankee);
 164:
                    if(mike) { _fun00014_ip = 177; continue _fun00013 }
 167:
                    mike = entity.push;
                    mike = mike.bind(entity)(verify);
 177:
                    verify = tango.bind(report)();
                    mike = verify.done;
                    zulu = verify;
                    if(!mike) { _fun00014_ip = 127; continue _fun00013 }
 192:
                    return entity;
 194:
                    entity = new Array(0);
                    return entity;
                }
            };
            echo = verify.bind(offset)(golf, report, oscar);
            report = zulu[entity];
            verify = mike.bind(tango)(report);
            golf = verify.useStateFromStores;
            report = _closure1_slot9;
            oscar = new Array(1);
            oscar[0] = report;
            report = function() {
                mike = _closure1_slot9;
                entity = mike.isSelfDeaf;
                entity = entity.bind(mike)();
                return entity;
            };
            variable40 = golf.bind(verify)(oscar, report);
            verify = _closure1_slot3;
            golf = verify.useCallback;
            oscar = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 40;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.toggleSelfDeaf;
                mike = mike.bind(zulu)();
                return entity;
            };
            report = new Array(0);
            variable39 = golf.bind(verify)(oscar, report);
            report = zulu[entity];
            offset = mike.bind(tango)(report);
            verify = offset.useStateFromStores;
            report = _closure1_slot5;
            golf = new Array(1);
            golf[0] = report;
            oscar = function() {
                zulu = _closure1_slot5;
                mike = zulu.getVoiceParticipantsHidden;
                entity = _closure2_slot1;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            variable36 = verify.bind(offset)(golf, oscar);
            var _closure2_slot4 = variable36;
            oscar = zulu[entity];
            verify = mike.bind(tango)(oscar);
            golf = verify.useStateFromStores;
            oscar = new Array(2);
            oscar[0] = report;
            report = _closure1_slot7;
            oscar[1] = report;
            report = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    tango = _closure1_slot5;
                    mike = tango.getSelectedParticipant;
                    entity = _closure2_slot1;
                    mike = mike.bind(tango)(entity);
                    tango = _closure1_slot16;
                    entity = undefined;
                    tango = tango.bind(entity)(mike);
                    entity = null;
                    if(!tango) { _fun00016_ip = 78; continue _fun00015 }
 41:
                    tango = mike.stream;
                    tango = tango.ownerId;
                    oscar = _closure1_slot7;
                    zulu = oscar.getId;
                    zulu = zulu.bind(oscar)();
                    entity = null;
                    if(!(tango !== zulu)) { _fun00016_ip = 78; continue _fun00015 }
 73:
                    entity = mike.id;
 78:
                    return entity;
                }
            };
            vacuum = golf.bind(verify)(oscar, report);
            var _closure2_slot5 = vacuum;
            verify = _closure1_slot3;
            golf = verify.useCallback;
            oscar = new Array(2);
            oscar[0] = foxtrot;
            oscar[1] = variable36;
            report = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 41;
                mike = mike[entity];
                entity = undefined;
                report = zulu.bind(entity)(mike);
                tango = report.toggleVoiceParticipantsHidden;
                zulu = _closure2_slot1;
                mike = _closure2_slot4;
                mike = !mike;
                mike = tango.bind(report)(zulu, mike);
                return entity;
            };
            equality = golf.bind(verify)(report, oscar);
            verify = _closure1_slot3;
            golf = verify.useCallback;
            oscar = new Array(1);
            oscar[0] = foxtrot;
            report = function() {
                report = _closure1_slot0;
                tango = _closure1_slot2;
                entity = 30;
                zulu = tango[entity];
                entity = undefined;
                report = report.bind(entity)(zulu);
                zulu = report.closeVoicePanelSettingsActionSheet;
                zulu = zulu.bind(report)();
                zulu = _closure1_slot1;
                mike = 42;
                mike = tango[mike];
                tango = zulu.bind(entity)(mike);
                zulu = tango.open;
                mike = _closure2_slot1;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            record = golf.bind(verify)(report, oscar);
            verify = _closure1_slot3;
            golf = verify.useCallback;
            oscar = new Array(1);
            oscar[0] = kilo;
            report = function() {
                zulu = _closure1_slot0;
                tango = _closure1_slot2;
                entity = 30;
                mike = tango[entity];
                entity = undefined;
                report = zulu.bind(entity)(mike);
                mike = report.closeVoicePanelSettingsActionSheet;
                mike = mike.bind(report)();
                mike = 43;
                mike = tango[mike];
                tango = zulu.bind(entity)(mike);
                zulu = tango.showVoiceSettingsActionSheet;
                mike = _closure2_slot0;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            output = golf.bind(verify)(report, oscar);
            verify = _closure1_slot3;
            golf = verify.useCallback;
            oscar = new Array(1);
            oscar[0] = foxtrot;
            report = function() {
                report = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 44;
                tango = zulu[entity];
                entity = undefined;
                oscar = report.bind(entity)(tango);
                report = oscar.openLazy;
                golf = _closure1_slot0;
                tango = 46;
                tango = zulu[tango];
                golf = golf.bind(entity)(tango);
                tango = 45;
                tango = zulu[tango];
                zulu = zulu.paths;
                tango = golf.bind(entity)(tango, zulu);
                zulu = _closure1_slot17;
                mike = {};
                golf = _closure2_slot1;
                mike['channelId'] = golf;
                mike = report.bind(oscar)(tango, zulu, mike);
                return entity;
            };
            quebec = golf.bind(verify)(report, oscar);
            verify = _closure1_slot3;
            golf = verify.useCallback;
            oscar = new Array(2);
            oscar[0] = foxtrot;
            oscar[1] = vacuum;
            report = function() {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    zulu = _closure2_slot5;
                    mike = null;
                    if(!(mike != zulu)) { _fun00018_ip = 58; continue _fun00017 }
 13:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 47;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.openSecureFramesStreamVerification;
                    mike = _closure2_slot5;
                    entity = _closure2_slot1;
                    entity = zulu.bind(tango)(mike, entity);
 58:
                    entity = undefined;
                    return entity;
                }
            };
            status = golf.bind(verify)(report, oscar);
            report = 48;
            oscar = zulu[report];
            golf = mike.bind(tango)(oscar);
            oscar = golf.useIsCallRTCConnectionEmpty;
            papa = oscar.bind(golf)();
            report = zulu[report];
            oscar = mike.bind(tango)(report);
            report = oscar.useIsStreamRTCConnectionEmpty;
            control = report.bind(oscar)(vacuum);
            report = zulu[entity];
            offset = mike.bind(tango)(report);
            verify = offset.useStateFromStores;
            report = _closure1_slot4;
            golf = new Array(1);
            golf[0] = report;
            oscar = new Array(1);
            oscar[0] = foxtrot;
            report = function() {
                zulu = _closure1_slot4;
                mike = zulu.getSelfEmbeddedActivityForChannel;
                entity = _closure2_slot1;
                mike = mike.bind(zulu)(entity);
                entity = null;
                entity = entity != mike;
                return entity;
            };
            offset = verify.bind(offset)(golf, report, oscar);
            report = _closure1_slot1;
            oscar = 49;
            oscar = zulu[oscar];
            oscar = report.bind(tango)(oscar);
            golf = oscar.bind(tango)(sierra);
            entity = zulu[entity];
            backup = mike.bind(tango)(entity);
            romeo = backup.useStateFromStores;
            entity = _closure1_slot10;
            verify = new Array(1);
            verify[0] = entity;
            oscar = new Array(1);
            oscar[0] = foxtrot;
            entity = function() {
                tango = _closure1_slot10;
                zulu = tango.canWithPartialContext;
                entity = _closure1_slot14;
                mike = entity.MANAGE_CHANNELS;
                entity = {};
                report = _closure2_slot1;
                entity['channelId'] = report;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            backup = romeo.bind(backup)(verify, entity, oscar);
            entity = 50;
            entity = zulu[entity];
            oscar = mike.bind(tango)(entity);
            entity = oscar.useCanInviteMembers;
            update = entity.bind(oscar)(foxtrot);
            entity = 51;
            entity = zulu[entity];
            oscar = mike.bind(tango)(entity);
            entity = oscar.useInviteMembersCallback;
            context = entity.bind(oscar)(foxtrot);
            entity = 52;
            entity = zulu[entity];
            entity = report.bind(tango)(entity);
            verify = entity.bind(tango)(sierra);
            entity = 20;
            entity = zulu[entity];
            zulu = mike.bind(tango)(entity);
            mike = zulu.useIsSecureFramesUIEnabled;
            entity = {};
            entity['channelId'] = foxtrot;
            report = 'VoicePanelSettingsOverview';
            entity['location'] = report;
            result = mike.bind(zulu)(entity);
            var _closure2_slot6 = result;
            zulu = _closure1_slot19;
            mike = _closure1_slot20;
            entity = {};
            romeo = _closure1_slot18;
            oscar = _closure1_slot24;
            report = {};
            report['guildId'] = kilo;
            report['channelId'] = foxtrot;
            oscar = romeo.bind(tango)(oscar, report);
            report = new Array(6);
            report[0] = oscar;
            romeo = null;
            oscar = null;
            if(!verify) { _fun00012_ip = 922; continue _fun00011 }
 833:
            kilo = _closure1_slot18;
            foxtrot = _closure1_slot0;
            lima = _closure1_slot2;
            verify = 53;
            verify = lima[verify];
            verify = foxtrot.bind(tango)(verify);
            foxtrot = verify.VoicePanelFormSection;
            verify = {};
            target = _closure1_slot18;
            config = _closure1_slot1;
            sequence = 54;
            sequence = lima[sequence];
            config = config.bind(tango)(sequence);
            sequence = {};
            sequence['channel'] = sierra;
            sierra = _closure1_slot13;
            sierra = sierra.CHANNEL_ACTION_SHEET;
            sequence['analyticsSection'] = sierra;
            sequence = target.bind(tango)(config, sequence);
            verify['children'] = sequence;
            oscar = kilo.bind(tango)(foxtrot, verify);
 922:
            report[1] = oscar;
            oscar = backup;
            if(backup) { _fun00012_ip = 935; continue _fun00011 }
 932:
            oscar = golf;
 935:
            if(!oscar) { _fun00012_ip = 1223; continue _fun00011 }
 941:
            foxtrot = _closure1_slot18;
            verify = _closure1_slot0;
            kilo = _closure1_slot2;
            golf = 53;
            golf = kilo[golf];
            golf = verify.bind(tango)(golf);
            verify = golf.VoicePanelFormSection;
            golf = {};
            if(!backup) { _fun00012_ip = 1213; continue _fun00011 }
 979:
            config = _closure1_slot18;
            target = _closure1_slot0;
            lima = _closure1_slot2;
            kilo = 32;
            kilo = lima[kilo];
            kilo = target.bind(tango)(kilo);
            sequence = kilo.TableRow;
            kilo = {};
            kilo['onPress'] = record;
            whiskey = _closure1_slot18;
            sierra = _closure1_slot1;
            variable37 = 23;
            record = lima[variable37];
            sierra = sierra.bind(tango)(record);
            record = {};
            variable37 = lima[variable37];
            variable37 = target.bind(tango)(variable37);
            variable37 = variable37.VoicePanelEmojiVariant;
            variable37 = variable37.VoicePanelSettingsRowIcon;
            record['variant'] = variable37;
            record = whiskey.bind(tango)(sierra, record);
            kilo['icon'] = record;
            record = 26;
            sierra = lima[record];
            sierra = target.bind(tango)(sierra);
            variable37 = sierra.intl;
            whiskey = variable37.string;
            sierra = lima[record];
            sierra = target.bind(tango)(sierra);
            sierra = sierra.t;
            sierra = sierra.XPDhcX;
            sierra = whiskey.bind(variable37)(sierra);
            kilo['label'] = sierra;
            sierra = lima[record];
            sierra = target.bind(tango)(sierra);
            whiskey = sierra.intl;
            sierra = whiskey.string;
            record = lima[record];
            record = target.bind(tango)(record);
            record = record.t;
            record = record.w7ZEoq;
            record = sierra.bind(whiskey)(record);
            kilo['subLabel'] = record;
            sierra = _closure1_slot18;
            record = 36;
            record = lima[record];
            record = target.bind(tango)(record);
            target = record.TableRowArrow;
            record = {};
            record = sierra.bind(tango)(target, record);
            kilo['trailing'] = record;
            backup = config.bind(tango)(sequence, kilo);
 1213:
            golf['children'] = backup;
            oscar = foxtrot.bind(tango)(verify, golf);
 1223:
            report[2] = oscar;
            foxtrot = _closure1_slot19;
            variable37 = _closure1_slot0;
            lima = _closure1_slot2;
            golf = 53;
            oscar = lima[golf];
            oscar = variable37.bind(tango)(oscar);
            verify = oscar.VoicePanelFormSection;
            oscar = {};
            target = _closure1_slot18;
            kilo = 32;
            backup = lima[kilo];
            backup = variable37.bind(tango)(backup);
            sequence = backup.TableRow;
            backup = {};
            backup['onPress'] = output;
            sierra = _closure1_slot18;
            config = 33;
            output = lima[config];
            output = variable37.bind(tango)(output);
            record = output.TableRowIcon;
            output = {};
            whiskey = 55;
            whiskey = lima[whiskey];
            whiskey = variable37.bind(tango)(whiskey);
            whiskey = whiskey.SettingsIcon;
            output['IconComponent'] = whiskey;
            variable42 = _closure1_slot1;
            whiskey = 56;
            variable38 = lima[whiskey];
            variable38 = variable42.bind(tango)(variable38);
            output['source'] = variable38;
            output = sierra.bind(tango)(record, output);
            backup['icon'] = output;
            output = 26;
            record = lima[output];
            record = variable37.bind(tango)(record);
            variable38 = record.intl;
            sierra = variable38.string;
            record = lima[output];
            record = variable37.bind(tango)(record);
            record = record.t;
            record = record.NiTd0d;
            record = sierra.bind(variable38)(record);
            backup['label'] = record;
            record = lima[output];
            record = variable37.bind(tango)(record);
            variable38 = record.intl;
            sierra = variable38.string;
            record = lima[output];
            record = variable37.bind(tango)(record);
            record = record.t;
            record = record.16SG+P;
            record = sierra.bind(variable38)(record);
            backup['subLabel'] = record;
            variable41 = _closure1_slot18;
            record = 36;
            sierra = lima[record];
            sierra = variable37.bind(tango)(sierra);
            variable38 = sierra.TableRowArrow;
            sierra = {};
            sierra = variable41.bind(tango)(variable38, sierra);
            backup['trailing'] = sierra;
            sequence = target.bind(tango)(sequence, backup);
            backup = new Array(5);
            backup[0] = sequence;
            variable38 = _closure1_slot18;
            sequence = 38;
            target = lima[sequence];
            target = variable37.bind(tango)(target);
            sierra = target.TableSwitchRow;
            target = {};
            variable44 = _closure1_slot18;
            variable41 = lima[config];
            variable41 = variable37.bind(tango)(variable41);
            variable43 = variable41.TableRowIcon;
            variable41 = {};
            variable45 = 57;
            variable45 = lima[variable45];
            variable45 = variable37.bind(tango)(variable45);
            variable45 = variable45.HeadphonesSlashIcon;
            variable41['IconComponent'] = variable45;
            variable45 = 58;
            variable45 = lima[variable45];
            variable45 = variable42.bind(tango)(variable45);
            variable41['source'] = variable45;
            variable41 = variable44.bind(tango)(variable43, variable41);
            target['icon'] = variable41;
            variable41 = lima[output];
            variable41 = variable37.bind(tango)(variable41);
            variable44 = variable41.intl;
            variable43 = variable44.string;
            variable41 = lima[output];
            variable41 = variable37.bind(tango)(variable41);
            variable41 = variable41.t;
            variable41 = variable41.wjcRFR;
            variable41 = variable43.bind(variable44)(variable41);
            target['accessibilityHint'] = variable41;
            target['value'] = variable40;
            target['onValueChange'] = variable39;
            variable39 = lima[output];
            variable39 = variable37.bind(tango)(variable39);
            variable41 = variable39.intl;
            variable40 = variable41.string;
            variable39 = lima[output];
            variable39 = variable37.bind(tango)(variable39);
            variable39 = variable39.t;
            variable39 = variable39.wjcRFR;
            variable39 = variable40.bind(variable41)(variable39);
            target['label'] = variable39;
            variable39 = lima[output];
            variable39 = variable37.bind(tango)(variable39);
            variable41 = variable39.intl;
            variable40 = variable41.string;
            variable39 = lima[output];
            variable39 = variable37.bind(tango)(variable39);
            variable39 = variable39.t;
            variable39 = variable39.M3VN2d;
            variable39 = variable40.bind(variable41)(variable39);
            target['subLabel'] = variable39;
            target = variable38.bind(tango)(sierra, target);
            backup[1] = target;
            sierra = _closure1_slot18;
            sequence = lima[sequence];
            sequence = variable37.bind(tango)(sequence);
            target = sequence.TableSwitchRow;
            sequence = {};
            variable40 = _closure1_slot18;
            variable38 = lima[config];
            variable38 = variable37.bind(tango)(variable38);
            variable39 = variable38.TableRowIcon;
            variable38 = {};
            variable41 = 59;
            variable41 = lima[variable41];
            variable41 = variable37.bind(tango)(variable41);
            variable41 = variable41.VideoIcon;
            variable38['IconComponent'] = variable41;
            variable41 = 60;
            variable41 = lima[variable41];
            variable41 = variable42.bind(tango)(variable41);
            variable38['source'] = variable41;
            variable38 = variable40.bind(tango)(variable39, variable38);
            sequence['icon'] = variable38;
            variable38 = lima[output];
            variable38 = variable37.bind(tango)(variable38);
            variable40 = variable38.intl;
            variable39 = variable40.string;
            variable38 = lima[output];
            variable38 = variable37.bind(tango)(variable38);
            variable38 = variable38.t;
            variable38 = variable38.ZMTRyc;
            variable38 = variable39.bind(variable40)(variable38);
            sequence['accessibilityHint'] = variable38;
            sequence['value'] = variable36;
            sequence['onValueChange'] = equality;
            equality = lima[output];
            equality = variable37.bind(tango)(equality);
            variable38 = equality.intl;
            variable36 = variable38.string;
            equality = lima[output];
            equality = variable37.bind(tango)(equality);
            equality = equality.t;
            equality = equality.ZMTRyc;
            equality = variable36.bind(variable38)(equality);
            sequence['label'] = equality;
            equality = lima[output];
            equality = variable37.bind(tango)(equality);
            variable36 = equality.intl;
            equality = variable36.string;
            lima = lima[output];
            lima = variable37.bind(tango)(lima);
            lima = lima.t;
            lima = lima.MlpCFR;
            lima = equality.bind(variable36)(lima);
            sequence['subLabel'] = lima;
            sequence = sierra.bind(tango)(target, sequence);
            backup[2] = sequence;
            sequence = result;
            if(!result) { _fun00012_ip = 2038; continue _fun00011 }
 2034:
            sequence = romeo == vacuum;
 2038:
            if(!sequence) { _fun00012_ip = 2044; continue _fun00011 }
 2041:
            sequence = !papa;
 2044:
            if(!sequence) { _fun00012_ip = 2289; continue _fun00011 }
 2050:
            sierra = _closure1_slot18;
            equality = _closure1_slot0;
            lima = _closure1_slot2;
            papa = lima[kilo];
            papa = equality.bind(tango)(papa);
            target = papa.TableRow;
            papa = {};
            papa['onPress'] = quebec;
            variable37 = _closure1_slot18;
            quebec = lima[config];
            quebec = equality.bind(tango)(quebec);
            variable36 = quebec.TableRowIcon;
            quebec = {};
            variable38 = 27;
            variable38 = lima[variable38];
            variable38 = equality.bind(tango)(variable38);
            variable38 = variable38.LockIcon;
            quebec['IconComponent'] = variable38;
            variable39 = _closure1_slot1;
            variable38 = lima[whiskey];
            variable38 = variable39.bind(tango)(variable38);
            quebec['source'] = variable38;
            quebec = variable37.bind(tango)(variable36, quebec);
            papa['icon'] = quebec;
            quebec = lima[output];
            quebec = equality.bind(tango)(quebec);
            variable37 = quebec.intl;
            variable36 = variable37.string;
            quebec = lima[output];
            quebec = equality.bind(tango)(quebec);
            quebec = quebec.t;
            quebec = quebec.cTQI5u;
            quebec = variable36.bind(variable37)(quebec);
            papa['label'] = quebec;
            quebec = lima[output];
            quebec = equality.bind(tango)(quebec);
            variable37 = quebec.intl;
            variable36 = variable37.string;
            quebec = lima[output];
            quebec = equality.bind(tango)(quebec);
            quebec = quebec.t;
            quebec = quebec.Etxti4;
            quebec = variable36.bind(variable37)(quebec);
            papa['subLabel'] = quebec;
            quebec = _closure1_slot18;
            lima = lima[record];
            lima = equality.bind(tango)(lima);
            equality = lima.TableRowArrow;
            lima = {};
            lima = quebec.bind(tango)(equality, lima);
            papa['trailing'] = lima;
            sequence = sierra.bind(tango)(target, papa);
 2289:
            backup[3] = sequence;
            if(!result) { _fun00012_ip = 2300; continue _fun00011 }
 2296:
            result = romeo != vacuum;
 2300:
            if(!result) { _fun00012_ip = 2306; continue _fun00011 }
 2303:
            result = !control;
 2306:
            if(!result) { _fun00012_ip = 2551; continue _fun00011 }
 2312:
            sequence = _closure1_slot18;
            target = _closure1_slot0;
            papa = _closure1_slot2;
            control = papa[kilo];
            control = target.bind(tango)(control);
            vacuum = control.TableRow;
            control = {};
            control['onPress'] = status;
            lima = _closure1_slot18;
            status = papa[config];
            status = target.bind(tango)(status);
            sierra = status.TableRowIcon;
            status = {};
            equality = 27;
            equality = papa[equality];
            equality = target.bind(tango)(equality);
            equality = equality.LockIcon;
            status['IconComponent'] = equality;
            equality = _closure1_slot1;
            whiskey = papa[whiskey];
            whiskey = equality.bind(tango)(whiskey);
            status['source'] = whiskey;
            status = lima.bind(tango)(sierra, status);
            control['icon'] = status;
            status = papa[output];
            status = target.bind(tango)(status);
            lima = status.intl;
            sierra = lima.string;
            status = papa[output];
            status = target.bind(tango)(status);
            status = status.t;
            status = status.QogHlZ;
            status = sierra.bind(lima)(status);
            control['label'] = status;
            status = papa[output];
            status = target.bind(tango)(status);
            lima = status.intl;
            sierra = lima.string;
            status = papa[output];
            status = target.bind(tango)(status);
            status = status.t;
            status = status.j5+1eX;
            status = sierra.bind(lima)(status);
            control['subLabel'] = status;
            status = _closure1_slot18;
            papa = papa[record];
            papa = target.bind(tango)(papa);
            target = papa.TableRowArrow;
            papa = {};
            papa = status.bind(tango)(target, papa);
            control['trailing'] = papa;
            result = sequence.bind(tango)(vacuum, control);
 2551:
            backup[4] = result;
            oscar['children'] = backup;
            oscar = foxtrot.bind(tango)(verify, oscar);
            report[3] = oscar;
            verify = source.length;
            oscar = 0;
            oscar = verify > oscar;
            if(oscar) { _fun00012_ip = 2586; continue _fun00011 }
 2583:
            oscar = update;
 2586:
            if(!oscar) { _fun00012_ip = 2988; continue _fun00011 }
 2592:
            backup = _closure1_slot19;
            control = _closure1_slot0;
            result = _closure1_slot2;
            verify = result[golf];
            verify = control.bind(tango)(verify);
            foxtrot = verify.VoicePanelFormSection;
            verify = {};
            vacuum = result[output];
            vacuum = control.bind(tango)(vacuum);
            target = vacuum.intl;
            papa = target.formatToPlainString;
            result = result[output];
            result = control.bind(tango)(result);
            result = result.t;
            sequence = result.AWmdd3;
            control = {};
            sierra = source.length;
            result = global;
            vacuum = result.HermesInternal;
            status = vacuum.concat;
            vacuum = '';
            status = status.bind(vacuum)(sierra);
            control['count'] = status;
            control = papa.bind(target)(sequence, control);
            result = result.HermesInternal;
            result = result.concat;
            result = result.bind(vacuum)(control);
            verify['title'] = result;
            result = null;
            if(!update) { _fun00012_ip = 2928; continue _fun00011 }
 2727:
            control = _closure1_slot18;
            sequence = _closure1_slot0;
            vacuum = _closure1_slot2;
            kilo = vacuum[kilo];
            kilo = sequence.bind(tango)(kilo);
            update = kilo.TableRow;
            kilo = {};
            kilo['onPress'] = context;
            papa = _closure1_slot18;
            config = vacuum[config];
            config = sequence.bind(tango)(config);
            context = config.TableRowIcon;
            config = {};
            target = 61;
            target = vacuum[target];
            target = sequence.bind(tango)(target);
            target = target.GroupPlusIcon;
            config['IconComponent'] = target;
            status = _closure1_slot1;
            target = 62;
            target = vacuum[target];
            target = status.bind(tango)(target);
            config['source'] = target;
            target = 'blurple';
            config['variant'] = target;
            config = papa.bind(tango)(context, config);
            kilo['icon'] = config;
            config = vacuum[output];
            config = sequence.bind(tango)(config);
            papa = config.intl;
            context = papa.string;
            config = vacuum[output];
            config = sequence.bind(tango)(config);
            config = config.t;
            config = config.f1+QIC;
            config = context.bind(papa)(config);
            kilo['label'] = config;
            config = _closure1_slot18;
            vacuum = vacuum[record];
            vacuum = sequence.bind(tango)(vacuum);
            sequence = vacuum.TableRowArrow;
            vacuum = {};
            vacuum = config.bind(tango)(sequence, vacuum);
            kilo['trailing'] = vacuum;
            result = control.bind(tango)(update, kilo);
 2928:
            kilo = new Array(3);
            kilo[0] = result;
            update = source.map;
            result = function(argFoo) {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    entity = argFoo;
                    report = _closure1_slot18;
                    zulu = _closure1_slot0;
                    tango = _closure1_slot2;
                    mike = 53;
                    mike = tango[mike];
                    tango = undefined;
                    mike = zulu.bind(tango)(mike);
                    zulu = mike.MemberRowItem;
                    mike = {};
                    oscar = entity.user;
                    mike['user'] = oscar;
                    oscar = entity.voiceState;
                    oscar = oscar.selfStream;
                    mike['selfStream'] = oscar;
                    golf = entity.nick;
                    oscar = null;
                    options = oscar != golf;
                    oscar = undefined;
                    if(!options) { _fun00020_ip = 86; continue _fun00019 }
 83:
                    oscar = golf;
 86:
                    mike['nick'] = oscar;
                    golf = _closure2_slot1;
                    mike['channelId'] = golf;
                    golf = _closure2_slot0;
                    mike['guildId'] = golf;
                    oscar = _closure2_slot6;
                    mike['showSecureFramesUI'] = oscar;
                    entity = entity.user;
                    entity = entity.id;
                    entity = report.bind(tango)(zulu, mike, entity);
                    return entity;
                }
            };
            result = update.bind(source)(result);
            kilo[1] = result;
            result = echo.map;
            sizing = function(argFoo) {
                entity = argFoo;
                report = _closure1_slot18;
                zulu = _closure1_slot0;
                tango = _closure1_slot2;
                mike = 53;
                mike = tango[mike];
                tango = undefined;
                mike = zulu.bind(tango)(mike);
                zulu = mike.MemberRowItem;
                mike = {};
                mike['user'] = entity;
                golf = _closure2_slot1;
                mike['channelId'] = golf;
                oscar = _closure2_slot0;
                mike['guildId'] = oscar;
                oscar = true;
                mike['notConnected'] = oscar;
                mike['showRing'] = oscar;
                entity = entity.id;
                entity = report.bind(tango)(zulu, mike, entity);
                return entity;
            };
            sizing = result.bind(echo)(sizing);
            kilo[2] = sizing;
            verify['children'] = kilo;
            oscar = backup.bind(tango)(foxtrot, verify);
 2988:
            report[4] = oscar;
            oscar = null;
            if(!options) { _fun00012_ip = 3136; continue _fun00011 }
 3000:
            verify = _closure1_slot19;
            sizing = _closure1_slot0;
            foxtrot = _closure1_slot2;
            golf = foxtrot[golf];
            golf = sizing.bind(tango)(golf);
            options = golf.VoicePanelFormSection;
            golf = {};
            backup = foxtrot[output];
            backup = sizing.bind(tango)(backup);
            kilo = backup.intl;
            backup = kilo.string;
            foxtrot = foxtrot[output];
            foxtrot = sizing.bind(tango)(foxtrot);
            foxtrot = foxtrot.t;
            foxtrot = foxtrot.J6rqBw;
            foxtrot = backup.bind(kilo)(foxtrot);
            golf['title'] = foxtrot;
            romeo = null;
            if(!offset) { _fun00012_ip = 3098; continue _fun00011 }
 3082:
            backup = _closure1_slot18;
            foxtrot = _closure1_slot25;
            offset = {};
            romeo = backup.bind(tango)(foxtrot, offset);
 3098:
            offset = new Array(2);
            offset[0] = romeo;
            foxtrot = _closure1_slot18;
            romeo = _closure1_slot26;
            yankee = {};
            yankee = foxtrot.bind(tango)(romeo, yankee);
            offset[1] = yankee;
            golf['children'] = offset;
            oscar = verify.bind(tango)(options, golf);
 3136:
            report[5] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    tango = report.bind(options)(tango);
    report = 63;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/voice_panel/native/header/VoicePanelSettingsOverview.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['VoicePanelSettingsOverviewHeader'] = mike;
    return entity;
})();