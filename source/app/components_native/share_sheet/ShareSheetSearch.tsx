// app/components_native/share_sheet/ShareSheetSearch.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    romeo = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = romeo;
    var _closure1_slot2 = golf;
    entity = function(argFoo) { // Original name: extractDomain
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            entity = undefined;
            zulu = undefined;
 7: // try_start_0
            tango = global;
            report = tango.URL;
            oscar = mike;
            tango = report.prototype;
            tango = Object.create(tango, {constructor: {value: report}});
            golf = tango;
            mike = new golf[report](oscar, report);
            mike = mike instanceof Object ? mike : tango;
            report = mike.hostname;
            zulu = report;
            tango = report.startsWith;
            mike = 'www.';
            mike = tango.bind(report)(mike);
            report = zulu;
            if(mike) { _fun00002_ip = 75; continue _fun00001 }
 70:
            mike = report;
            _fun00002_ip = 88; continue _fun00001;
 75:
            tango = report.slice;
            zulu = 4;
            mike = tango.bind(report)(zulu);
 88: // try_end0
            return mike;
 90: // catch_target0
            CatchBlockStart(arg_register=1);
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = function(argFoo) { // Original name: ShareSheetSendButton
        entity = argFoo;
        report = entity.onPress;
        tango = _closure1_slot17;
        options = _closure1_slot0;
        verify = _closure1_slot2;
        entity = 14;
        entity = verify[entity];
        zulu = undefined;
        entity = options.bind(zulu)(entity);
        mike = entity.HeaderActionButton;
        entity = {};
        golf = _closure1_slot1;
        oscar = 15;
        oscar = verify[oscar];
        oscar = golf.bind(zulu)(oscar);
        entity['source'] = oscar;
        entity['onPress'] = report;
        report = 16;
        oscar = verify[report];
        oscar = options.bind(zulu)(oscar);
        golf = oscar.intl;
        oscar = golf.string;
        report = verify[report];
        report = options.bind(zulu)(report);
        report = report.t;
        report = report.TXNS7e;
        report = oscar.bind(golf)(report);
        entity['accessibilityLabel'] = report;
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    var _closure1_slot21 = entity;
    mike = function(argFoo, argBar) { // Original name: renderSearchResult
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            mike = argBar;
            var _closure2_slot1 = mike;
            oscar = entity.type;
            golf = _closure1_slot0;
            zulu = _closure1_slot2;
            verify = 17;
            zulu = zulu[verify];
            report = undefined;
            zulu = golf.bind(report)(zulu);
            zulu = zulu.AutocompleterResultTypes;
            zulu = zulu.HEADER;
            if(!(oscar !== zulu)) { _fun00004_ip = 393; continue _fun00003 }
 65:
            zulu = {};
            oscar = entity.record;
            oscar = oscar.id;
            zulu['key'] = oscar;
            tango = function() { // Original name: onPress
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 21;
                zulu = zulu[entity];
                entity = undefined;
                report = tango.bind(entity)(zulu);
                tango = report.track;
                mike = _closure1_slot15;
                zulu = mike.SHARE_SHEET_ACTION;
                mike = {};
                oscar = 'recipient_selected';
                mike['action'] = oscar;
                mike = tango.bind(report)(zulu, mike);
                zulu = _closure2_slot1;
                mike = _closure2_slot0;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            zulu['onPress'] = tango;
            golf = zulu.key;
            options = zulu.onPress;
            tango = entity.type;
            oscar = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[verify];
            zulu = oscar.bind(report)(zulu);
            zulu = zulu.AutocompleterResultTypes;
            zulu = zulu.USER;
            if(!(zulu !== tango)) { _fun00004_ip = 338; continue _fun00003 }
 144:
            oscar = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[verify];
            zulu = oscar.bind(report)(zulu);
            zulu = zulu.AutocompleterResultTypes;
            zulu = zulu.GROUP_DM;
            if(!(zulu !== tango)) { _fun00004_ip = 276; continue _fun00003 }
 177:
            oscar = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[verify];
            zulu = oscar.bind(report)(zulu);
            zulu = zulu.AutocompleterResultTypes;
            zulu = zulu.TEXT_CHANNEL;
            if(!(zulu !== tango)) { _fun00004_ip = 276; continue _fun00003 }
 210:
            oscar = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[verify];
            zulu = oscar.bind(report)(zulu);
            zulu = zulu.AutocompleterResultTypes;
            zulu = zulu.VOICE_CHANNEL;
            if(!(zulu !== tango)) { _fun00004_ip = 276; continue _fun00003 }
 243:
            tango = _closure1_slot0;
            oscar = _closure1_slot2;
            zulu = 19;
            zulu = oscar[zulu];
            tango = tango.bind(report)(zulu);
            zulu = tango.assertNever;
            zulu = zulu.bind(tango)(entity);
            return report;
 276:
            oscar = _closure1_slot17;
            tango = _closure1_slot0;
            verify = _closure1_slot2;
            zulu = 18;
            zulu = verify[zulu];
            zulu = tango.bind(report)(zulu);
            tango = zulu.ConnectedTextChannel;
            zulu = {};
            verify = false;
            zulu['showUnread'] = verify;
            zulu['onPress'] = options;
            verify = entity.record;
            zulu['channel'] = verify;
            zulu = oscar.bind(report)(tango, zulu, golf);
            return zulu;
 338:
            oscar = _closure1_slot17;
            tango = _closure1_slot0;
            verify = _closure1_slot2;
            zulu = 18;
            zulu = verify[zulu];
            zulu = tango.bind(report)(zulu);
            tango = zulu.ConnectedUser;
            zulu = {};
            zulu['onPress'] = options;
            options = entity.record;
            zulu['user'] = options;
            zulu = oscar.bind(report)(tango, zulu, golf);
            return zulu;
 393:
            tango = _closure1_slot17;
            zulu = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 20;
            mike = oscar[mike];
            mike = zulu.bind(report)(mike);
            zulu = mike.FormTitle;
            mike = {};
            oscar = entity.record;
            oscar = oscar.text;
            mike['title'] = oscar;
            entity = entity.record;
            entity = entity.id;
            entity = tango.bind(report)(zulu, mike, entity);
            return entity;
        }
    };
    var _closure1_slot22 = mike;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, report);
    foxtrot = 0;
    report = golf[foxtrot];
    entity = undefined;
    report = romeo.bind(entity)(report);
    var _closure1_slot3 = report;
    backup = 1;
    report = golf[backup];
    report = romeo.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    options = golf[report];
    report = argCorge;
    report = report.bind(entity)(options);
    var _closure1_slot5 = report;
    report = 3;
    report = golf[report];
    report = oscar.bind(entity)(report);
    options = report.View;
    var _closure1_slot6 = options;
    options = report.NativeModules;
    var _closure1_slot7 = options;
    report = report.ScrollView;
    var _closure1_slot8 = report;
    report = 4;
    report = golf[report];
    report = romeo.bind(entity)(report);
    var _closure1_slot9 = report;
    report = 5;
    report = golf[report];
    report = romeo.bind(entity)(report);
    var _closure1_slot10 = report;
    report = 6;
    report = golf[report];
    report = romeo.bind(entity)(report);
    var _closure1_slot11 = report;
    report = 7;
    report = golf[report];
    report = romeo.bind(entity)(report);
    var _closure1_slot12 = report;
    report = 8;
    report = golf[report];
    report = romeo.bind(entity)(report);
    var _closure1_slot13 = report;
    report = 9;
    report = golf[report];
    report = romeo.bind(entity)(report);
    var _closure1_slot14 = report;
    report = 10;
    report = golf[report];
    report = oscar.bind(entity)(report);
    options = report.AnalyticEvents;
    var _closure1_slot15 = options;
    report = report.NOOP;
    var _closure1_slot16 = report;
    report = 11;
    options = golf[report];
    options = oscar.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot17 = options;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.jsxs;
    var _closure1_slot18 = report;
    report = 12;
    report = golf[report];
    verify = oscar.bind(entity)(report);
    options = verify.createStyles;
    report = {};
    offset = {};
    yankee = 13;
    kilo = golf[yankee];
    kilo = romeo.bind(entity)(kilo);
    kilo = kilo.colors;
    kilo = kilo.BACKGROUND_SECONDARY;
    offset['backgroundColor'] = kilo;
    offset['flex'] = backup;
    report['container'] = offset;
    offset = {};
    offset['flex'] = backup;
    report['keyboardAwareView'] = offset;
    offset = {};
    offset['flex'] = backup;
    report['innerView'] = offset;
    offset = {};
    offset['marginTop'] = foxtrot;
    report['formSection'] = offset;
    offset = {};
    foxtrot = golf[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.TEXT_MUTED;
    offset['color'] = foxtrot;
    foxtrot = golf[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.BACKGROUND_FLOATING;
    offset['backgroundColor'] = foxtrot;
    report['commentColors'] = offset;
    offset = {};
    foxtrot = golf[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.TEXT_MUTED;
    offset['color'] = foxtrot;
    foxtrot = golf[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.BACKGROUND_PRIMARY;
    offset['backgroundColor'] = foxtrot;
    report['searchColors'] = offset;
    offset = {'backgroundColor': null, 'paddingVertical': 4, 'borderRadius': null, 'flexDirection': 'row', 'alignItems': 'center', 'marginRight': 16, 'marginLeft': 16};
    foxtrot = golf[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.BACKGROUND_FLOATING;
    offset['backgroundColor'] = foxtrot;
    foxtrot = golf[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.radii;
    foxtrot = foxtrot.xs;
    offset['borderRadius'] = foxtrot;
    report['selectedResultContainer'] = offset;
    offset = {'backgroundColor': null, 'flex': 1, 'flexShrink': 1};
    foxtrot = golf[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.BACKGROUND_FLOATING;
    offset['backgroundColor'] = foxtrot;
    report['selectedResult'] = offset;
    offset = {};
    yankee = golf[yankee];
    yankee = romeo.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.BACKGROUND_FLOATING;
    offset['backgroundColor'] = yankee;
    report['selectedResultCancelIcon'] = offset;
    report = options.bind(verify)(report);
    var _closure1_slot19 = report;
    report = 43;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'components_native/share_sheet/ShareSheetSearch.tsx';
    report = oscar.bind(golf)(report);
    tango = function(argFoo) { // Original name: ShareSheetSearch
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            options = entity.attachments;
            var _closure2_slot0 = options;
            mike = entity.text;
            var _closure2_slot1 = mike;
            source = entity.targetChannelId;
            tango = undefined;
            var _closure2_slot3 = tango;
            var _closure2_slot5 = tango;
            var _closure2_slot13 = tango;
            entity = function() { // Original name: _onSharePress
                tango = undefined;
                entity = undefined;
                zulu = _closure1_slot3;
                mike = function* () {
                    entity = function* () { // Original name: ?anon_0_
                        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(mike) { _fun00008_ip = 683; continue _fun00007 }
 12:
                            zulu = _closure2_slot13;
                            mike = null;
                            report = mike == zulu;
                            zulu = undefined;
                            tango = undefined;
                            if(report) { _fun00008_ip = 42; continue _fun00007 }
 32:
                            report = _closure2_slot13;
                            tango = report.record;
 42:
                            if(!(mike == tango)) { _fun00008_ip = 132; continue _fun00007 }
 46:
                            yankee = _closure1_slot0;
                            romeo = _closure1_slot2;
                            tango = 30;
                            tango = romeo[tango];
                            options = yankee.bind(zulu)(tango);
                            report = options.showInformationToast;
                            tango = 16;
                            verify = romeo[tango];
                            verify = yankee.bind(zulu)(verify);
                            offset = verify.intl;
                            verify = offset.string;
                            tango = romeo[tango];
                            tango = yankee.bind(zulu)(tango);
                            tango = tango.t;
                            tango = tango.zFuCsL;
                            tango = verify.bind(offset)(tango);
                            tango = report.bind(options)(tango);
                            _fun00008_ip = 677; continue _fun00007;
 132:
                            tango = _closure2_slot13;
                            options = tango.type;
                            verify = _closure1_slot0;
                            offset = _closure1_slot2;
                            report = 17;
                            report = offset[report];
                            report = verify.bind(zulu)(report);
                            report = report.AutocompleterResultTypes;
                            report = report.USER;
                            verify = _closure2_slot13;
                            verify = verify.record;
                            offset = verify.id;
                            verify = offset;
                            if(!(options === report)) { _fun00008_ip = 213; continue _fun00007 }
 198:
                            options = _closure1_slot11;
                            report = options.getDMFromUserId;
                            verify = report.bind(options)(offset);
 213:
                            options = _closure1_slot11;
                            report = options.getChannel;
                            report = report.bind(options)(verify);
                            if(!(mike == report)) { _fun00008_ip = 314; continue _fun00007 }
 231:
                            romeo = _closure1_slot0;
                            foxtrot = _closure1_slot2;
                            mike = 30;
                            mike = foxtrot[mike];
                            verify = romeo.bind(zulu)(mike);
                            options = verify.showInformationToast;
                            mike = 16;
                            offset = foxtrot[mike];
                            offset = romeo.bind(zulu)(offset);
                            yankee = offset.intl;
                            offset = yankee.string;
                            mike = foxtrot[mike];
                            mike = romeo.bind(zulu)(mike);
                            mike = mike.t;
                            mike = mike.zFuCsL;
                            mike = offset.bind(yankee)(mike);
                            mike = options.bind(verify)(mike);
                            _fun00008_ip = 677; continue _fun00007;
 314:
                            mike = global;
                            verify = mike.Promise;
                            options = verify.all;
                            yankee = _closure2_slot0;
                            offset = yankee.map;
                            mike = function() {
                                tango = _closure1_slot3;
                                zulu = undefined;
                                mike = function* (argFoo) {
                                    entity = function* (argFoo) { // Original name: ?anon_0_
                                        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                                            StartGenerator();
                                            report = argFoo;
                                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                            if(mike) { _fun00010_ip = 102; continue _fun00009 }
 10:
                                            tango = _closure1_slot0;
                                            zulu = _closure1_slot2;
                                            mike = 31;
                                            mike = zulu[mike];
                                            zulu = undefined;
                                            options = tango.bind(zulu)(mike);
                                            golf = options.getImageDimensionsIfMissing;
                                            oscar = report.uri;
                                            tango = report.width;
                                            mike = report.height;
                                            mike = golf.bind(options)(oscar, tango, mike);
                                            SaveGenerator(address=68);
 66:
                                            return mike;
 68:
                                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                            if(tango) { _fun00010_ip = 99; continue _fun00009 }
 74:
                                            oscar = mike.width;
                                            tango = mike.height;
                                            report['width'] = oscar;
                                            report['height'] = tango;
                                            return zulu;
 99:
                                            return mike;
 102:
                                            return entity;
                                        }
                                    };
                                    return entity;
                                };
                                mike = tango.bind(zulu)(mike);
                                var _closure6_slot0 = mike;
                                entity = function(argFoo) {
                                    entity = undefined;
                                    tango = _closure6_slot0;
                                    zulu = tango.apply;
                                    entity = arguments;
                                    mike = entity;
                                    entity = this;
                                    entity = zulu.bind(tango)(entity, mike);
                                    return entity;
                                };
                                return entity;
                            };
                            mike = mike.bind(zulu)();
                            mike = offset.bind(yankee)(mike);
                            mike = options.bind(verify)(mike);
                            SaveGenerator(address=362);
 360:
                            return mike;
 362:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                            if(options) { _fun00008_ip = 680; continue _fun00007 }
 371:
                            verify = _closure1_slot0;
                            offset = _closure1_slot2;
                            options = 30;
                            options = offset[options];
                            offset = verify.bind(zulu)(options);
                            verify = offset.sendAttachments;
                            options = {};
                            yankee = _closure2_slot3;
                            options['attachments'] = yankee;
                            options['channel'] = report;
                            yankee = _closure2_slot5;
                            options['comment'] = yankee;
                            options = verify.bind(offset)(options);
                            if(!options) { _fun00008_ip = 677; continue _fun00007 }
 432:
                            options = report.getGuildId;
                            offset = options.bind(report)();
                            romeo = {};
                            romeo['guild_id'] = offset;
                            options = report.id;
                            romeo['channel_id'] = options;
                            options = report.type;
                            romeo['channel_type'] = options;
                            options = _closure2_slot3;
                            options = options.length;
                            romeo['num_attachments'] = options;
                            verify = _closure2_slot3;
                            options = verify.map;
                            golf = function(argFoo) {
                                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                                    entity = argFoo;
                                    mike = entity.mimeType;
                                    entity = null;
                                    zulu = entity != mike;
                                    entity = 'unknown';
                                    if(!zulu) { _fun00012_ip = 25; continue _fun00011 }
 22:
                                    entity = mike;
 25:
                                    return entity;
                                }
                            };
                            golf = options.bind(verify)(golf);
                            romeo['attachment_mimetypes'] = golf;
                            options = _closure2_slot5;
                            golf = '';
                            golf = golf !== options;
                            romeo['has_comment'] = golf;
                            golf = _closure1_slot20;
                            oscar = _closure2_slot5;
                            oscar = golf.bind(zulu)(oscar);
                            romeo['uri_domain'] = oscar;
                            golf = _closure1_slot1;
                            options = _closure1_slot2;
                            oscar = 21;
                            oscar = options[oscar];
                            yankee = golf.bind(zulu)(oscar);
                            verify = yankee.track;
                            oscar = _closure1_slot15;
                            oscar = oscar.SHARE_MESSAGE_SENT;
                            oscar = verify.bind(yankee)(oscar, romeo);
                            oscar = 32;
                            oscar = options[oscar];
                            verify = golf.bind(zulu)(oscar);
                            golf = verify.selectChannel;
                            oscar = {};
                            oscar['guildId'] = offset;
                            offset = report.id;
                            oscar['channelId'] = offset;
                            oscar = golf.bind(verify)(oscar);
                            golf = _closure1_slot0;
                            oscar = 33;
                            oscar = options[oscar];
                            golf = golf.bind(zulu)(oscar);
                            oscar = golf.transitionToChannel;
                            report = report.id;
                            report = oscar.bind(golf)(report);
                            tango = _closure1_slot7;
                            report = tango.ShareManager;
                            tango = report.launchApp;
                            tango = tango.bind(report)();
 677:
                            return zulu;
 680:
                            return mike;
 683:
                            return entity;
                        }
                    };
                    return entity;
                };
                tango = zulu.bind(tango)(mike);
                _closure2_slot22 = tango;
                zulu = tango.apply;
                entity = arguments;
                mike = entity;
                entity = this;
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            var _closure2_slot22 = entity;
            entity = _closure1_slot19;
            context = entity.bind(tango)();
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            entity = 22;
            entity = golf[entity];
            zulu = oscar.bind(tango)(entity);
            entity = zulu.useNavigation;
            output = entity.bind(zulu)();
            var _closure2_slot2 = output;
            yankee = _closure1_slot5;
            entity = yankee.useState;
            entity = entity.bind(yankee)(options);
            update = _closure1_slot4;
            foxtrot = 2;
            zulu = update.bind(tango)(entity, foxtrot);
            entity = 0;
            papa = zulu[entity];
            _closure2_slot3 = papa;
            echo = 1;
            zulu = zulu[echo];
            var _closure2_slot4 = zulu;
            zulu = yankee.useState;
            zulu = zulu.bind(yankee)(mike);
            zulu = update.bind(tango)(zulu, foxtrot);
            lima = zulu[entity];
            _closure2_slot5 = lima;
            status = zulu[echo];
            var _closure2_slot6 = status;
            report = yankee.useEffect;
            zulu = new Array(2);
            zulu[0] = options;
            zulu[1] = mike;
            mike = function() {
                tango = _closure2_slot4;
                zulu = _closure2_slot0;
                entity = undefined;
                zulu = tango.bind(entity)(zulu);
                zulu = _closure2_slot6;
                mike = _closure2_slot1;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            mike = report.bind(yankee)(mike, zulu);
            zulu = 23;
            mike = golf[zulu];
            verify = oscar.bind(tango)(mike);
            options = verify.useStateFromStores;
            mike = _closure1_slot10;
            report = new Array(1);
            report[0] = mike;
            mike = function() {
                mike = _closure1_slot10;
                entity = mike.getId;
                entity = entity.bind(mike)();
                return entity;
            };
            mike = options.bind(verify)(report, mike);
            var _closure2_slot7 = mike;
            options = yankee.useMemo;
            report = new Array(1);
            report[0] = mike;
            mike = function() {
                entity = {};
                mike = {'blacklist': null, 'frecencyBoosters': true, 'userFilters': null};
                zulu = global;
                report = zulu.Set;
                oscar = _closure2_slot7;
                zulu = zulu.HermesInternal;
                tango = zulu.concat;
                zulu = 'user:';
                tango = tango.bind(zulu)(oscar);
                zulu = new Array(1);
                zulu[0] = tango;
                tango = report.prototype;
                tango = Object.create(tango, {constructor: {value: report}});
                options = tango;
                golf = zulu;
                zulu = new options[report](golf, oscar);
                zulu = zulu instanceof Object ? zulu : tango;
                mike['blacklist'] = zulu;
                entity['searchOptions'] = mike;
                return entity;
            };
            report = options.bind(yankee)(mike, report);
            offset = _closure1_slot1;
            mike = 24;
            mike = golf[mike];
            mike = offset.bind(tango)(mike);
            mike = mike.bind(tango)(report);
            options = mike.search;
            var _closure2_slot8 = options;
            sizing = mike.query;
            verify = mike.results;
            var _closure2_slot9 = verify;
            mike = 25;
            mike = golf[mike];
            mike = offset.bind(tango)(mike);
            mike = mike.bind(tango)();
            mike = mike.bottom;
            report = yankee.useState;
            backup = '';
            report = report.bind(yankee)(backup);
            report = update.bind(tango)(report, foxtrot);
            control = report[entity];
            report = report[echo];
            var _closure2_slot10 = report;
            report = yankee.useState;
            kilo = null;
            report = report.bind(yankee)(kilo);
            report = update.bind(tango)(report, foxtrot);
            result = report[entity];
            var _closure2_slot11 = result;
            report = report[echo];
            var _closure2_slot12 = report;
            report = 26;
            report = golf[report];
            report = offset.bind(tango)(report);
            report = report.bind(tango)(source);
            foxtrot = update.bind(tango)(report, foxtrot);
            report = foxtrot[entity];
            _closure2_slot13 = report;
            foxtrot = foxtrot[echo];
            var _closure2_slot14 = foxtrot;
            foxtrot = yankee.useRef;
            foxtrot = foxtrot.bind(yankee)(kilo);
            var _closure2_slot15 = foxtrot;
            echo = yankee.useRef;
            config = echo.bind(yankee)(kilo);
            var _closure2_slot16 = config;
            echo = 27;
            echo = golf[echo];
            update = oscar.bind(tango)(echo);
            echo = update.useFrecencySettings;
            echo = echo.bind(update)();
            echo = golf[zulu];
            vacuum = oscar.bind(tango)(echo);
            source = vacuum.useStateFromStores;
            echo = _closure1_slot9;
            update = new Array(1);
            update[0] = echo;
            echo = function() {
                mike = _closure1_slot9;
                entity = mike.isConnected;
                entity = entity.bind(mike)();
                return entity;
            };
            update = source.bind(vacuum)(update, echo);
            var _closure2_slot17 = update;
            echo = golf[zulu];
            record = oscar.bind(tango)(echo);
            vacuum = record.useStateFromStores;
            echo = _closure1_slot12;
            source = new Array(1);
            source[0] = echo;
            echo = function() {
                mike = _closure1_slot12;
                entity = mike.getFrequentlyWithoutFetchingLatest;
                entity = entity.bind(mike)();
                return entity;
            };
            vacuum = vacuum.bind(record)(source, echo);
            var _closure2_slot18 = vacuum;
            echo = golf[zulu];
            target = oscar.bind(tango)(echo);
            record = target.useStateFromStores;
            echo = _closure1_slot13;
            source = new Array(1);
            source[0] = echo;
            echo = function() {
                mike = _closure1_slot13;
                entity = mike.getCurrentlySelectedChannelId;
                entity = entity.bind(mike)();
                return entity;
            };
            echo = record.bind(target)(source, echo);
            var _closure2_slot19 = echo;
            source = backup !== sizing;
            var _closure2_slot20 = source;
            sizing = yankee.useMemo;
            backup = new Array(7);
            backup[0] = vacuum;
            backup[1] = source;
            backup[2] = update;
            backup[3] = echo;
            backup[4] = result;
            backup[5] = verify;
            backup[6] = report;
            verify = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 28;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.formatResultsWithHeaders;
                entity = {};
                report = _closure2_slot9;
                entity['results'] = report;
                report = _closure2_slot13;
                entity['selectedResult'] = report;
                report = _closure2_slot20;
                entity['hasNonEmptyQuery'] = report;
                report = _closure2_slot11;
                entity['queryMode'] = report;
                report = _closure2_slot18;
                entity['frequentChannels'] = report;
                report = _closure2_slot19;
                entity['selectedChannelId'] = report;
                tango = _closure2_slot17;
                entity['isConnected'] = tango;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            backup = sizing.bind(yankee)(verify, backup);
            result = yankee.useLayoutEffect;
            sizing = new Array(1);
            sizing[0] = backup;
            verify = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 29;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.DeprecatedLayoutAnimation;
                mike = mike.bind(zulu)();
                return entity;
            };
            verify = result.bind(yankee)(verify, sizing);
            verify = 34;
            verify = golf[verify];
            offset = offset.bind(tango)(verify);
            verify = function() { // Original name: onSharePress
                entity = undefined;
                tango = _closure2_slot22;
                zulu = tango.apply;
                entity = arguments;
                mike = entity;
                entity = this;
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            verify = offset.bind(tango)(verify);
            var _closure2_slot21 = verify;
            sizing = yankee.useLayoutEffect;
            offset = new Array(3);
            offset[0] = report;
            offset[1] = output;
            offset[2] = verify;
            verify = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    tango = _closure2_slot2;
                    zulu = tango.setOptions;
                    mike = {};
                    report = _closure2_slot13;
                    entity = null;
                    oscar = entity != report;
                    entity = undefined;
                    report = undefined;
                    if(!oscar) { _fun00014_ip = 41; continue _fun00013 }
 32:
                    report = function() {
                        tango = _closure1_slot17;
                        zulu = _closure1_slot21;
                        mike = {};
                        entity = function() { // Original name: onPress
                            mike = _closure2_slot21;
                            entity = undefined;
                            entity = mike.bind(entity)();
                            return entity;
                        };
                        mike['onPress'] = entity;
                        entity = undefined;
                        entity = tango.bind(entity)(zulu, mike);
                        return entity;
                    };
 41:
                    mike['headerRight'] = report;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                }
            };
            verify = sizing.bind(yankee)(verify, offset);
            sizing = yankee.useCallback;
            offset = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    mike = _closure2_slot15;
                    report = mike.current;
                    entity = _closure2_slot16;
                    tango = entity.current;
                    mike = null;
                    entity = mike != report;
                    if(!entity) { _fun00016_ip = 34; continue _fun00015 }
 30:
                    entity = mike != tango;
 34:
                    if(!entity) { _fun00016_ip = 66; continue _fun00015 }
 37:
                    zulu = tango.measureLayout;
                    mike = _closure1_slot16;
                    entity = function(argFoo, argBar, argBaz, argCorge) {
                        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                            entity = _closure2_slot15;
                            zulu = entity.current;
                            entity = null;
                            if(!(entity != zulu)) { _fun00018_ip = 45; continue _fun00017 }
 18:
                            mike = zulu.scrollTo;
                            entity = {};
                            tango = argBar;
                            entity['y'] = tango;
                            tango = true;
                            entity['animated'] = tango;
                            entity = mike.bind(zulu)(entity);
 45:
                            entity = undefined;
                            return entity;
                        }
                    };
                    entity = zulu.bind(tango)(report, entity, mike);
 66:
                    entity = undefined;
                    return entity;
                }
            };
            verify = new Array(0);
            output = sizing.bind(yankee)(offset, verify);
            offset = yankee.useCallback;
            verify = new Array(1);
            verify[0] = options;
            options = function(argFoo) {
                report = argFoo;
                zulu = _closure2_slot10;
                entity = undefined;
                zulu = zulu.bind(entity)(report);
                tango = _closure1_slot0;
                oscar = _closure1_slot2;
                zulu = 35;
                zulu = oscar[zulu];
                tango = tango.bind(entity)(zulu);
                zulu = tango.makeAutocompleterSearchParams;
                tango = zulu.bind(tango)(report);
                golf = tango.query;
                zulu = tango.queryMode;
                oscar = tango.resultTypes;
                report = _closure2_slot8;
                tango = {};
                tango['query'] = golf;
                tango['resultTypes'] = oscar;
                tango = report.bind(entity)(tango);
                mike = _closure2_slot12;
                mike = mike.bind(entity)(zulu);
                return entity;
            };
            echo = offset.bind(yankee)(options, verify);
            yankee = {};
            zulu = golf[zulu];
            options = oscar.bind(tango)(zulu);
            golf = options.useStateFromStores;
            zulu = _closure1_slot14;
            oscar = new Array(1);
            oscar[0] = zulu;
            zulu = function() {
                entity = _closure1_slot14;
                mike = entity.keyboardHeight;
                entity = 0;
                entity = entity !== mike;
                return entity;
            };
            zulu = golf.bind(options)(oscar, zulu);
            if(zulu) { _fun00006_ip = 876; continue _fun00005 }
 873:
            entity = mike;
 876:
            yankee['paddingBottom'] = entity;
            entity = kilo == report;
            update = null;
            if(entity) { _fun00006_ip = 1183; continue _fun00005 }
 893:
            mike = report.type;
            zulu = _closure1_slot0;
            entity = _closure1_slot2;
            oscar = 17;
            entity = entity[oscar];
            entity = zulu.bind(tango)(entity);
            entity = entity.AutocompleterResultTypes;
            entity = entity.USER;
            if(!(entity !== mike)) { _fun00006_ip = 1128; continue _fun00005 }
 937:
            zulu = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[oscar];
            entity = zulu.bind(tango)(entity);
            entity = entity.AutocompleterResultTypes;
            entity = entity.TEXT_CHANNEL;
            if(!(entity !== mike)) { _fun00006_ip = 1071; continue _fun00005 }
 970:
            zulu = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[oscar];
            entity = zulu.bind(tango)(entity);
            entity = entity.AutocompleterResultTypes;
            entity = entity.GROUP_DM;
            if(!(entity !== mike)) { _fun00006_ip = 1071; continue _fun00005 }
 1003:
            zulu = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[oscar];
            entity = zulu.bind(tango)(entity);
            entity = entity.AutocompleterResultTypes;
            entity = entity.VOICE_CHANNEL;
            if(!(entity !== mike)) { _fun00006_ip = 1071; continue _fun00005 }
 1036:
            mike = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 19;
            entity = zulu[entity];
            mike = mike.bind(tango)(entity);
            entity = mike.assertNever;
            entity = entity.bind(mike)(report);
            update = undefined;
            _fun00006_ip = 1183; continue _fun00005;
 1071:
            zulu = _closure1_slot17;
            mike = _closure1_slot0;
            oscar = _closure1_slot2;
            entity = 18;
            entity = oscar[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.ConnectedTextChannel;
            entity = {};
            oscar = false;
            entity['showUnread'] = oscar;
            oscar = report.record;
            entity['channel'] = oscar;
            update = zulu.bind(tango)(mike, entity);
            _fun00006_ip = 1183; continue _fun00005;
 1128:
            zulu = _closure1_slot17;
            mike = _closure1_slot0;
            oscar = _closure1_slot2;
            entity = 18;
            entity = oscar[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.ConnectedUser;
            entity = {};
            oscar = false;
            entity['showUnread'] = oscar;
            report = report.record;
            entity['user'] = report;
            update = zulu.bind(tango)(mike, entity);
 1183:
            zulu = _closure1_slot17;
            mike = _closure1_slot6;
            entity = {};
            report = context.container;
            entity['style'] = report;
            golf = _closure1_slot17;
            sierra = _closure1_slot1;
            vacuum = _closure1_slot2;
            report = 36;
            report = vacuum[report];
            oscar = sierra.bind(tango)(report);
            report = {};
            options = context.keyboardAwareView;
            report['style'] = options;
            offset = _closure1_slot18;
            verify = _closure1_slot8;
            options = {};
            options['ref'] = foxtrot;
            foxtrot = context.innerView;
            options['style'] = foxtrot;
            options['contentContainerStyle'] = yankee;
            yankee = 'always';
            options['keyboardShouldPersistTaps'] = yankee;
            result = _closure1_slot17;
            target = _closure1_slot0;
            sizing = 20;
            yankee = vacuum[sizing];
            yankee = target.bind(tango)(yankee);
            foxtrot = yankee.FormTitle;
            yankee = {};
            record = 16;
            source = vacuum[record];
            source = target.bind(tango)(source);
            equality = source.intl;
            whiskey = equality.string;
            source = vacuum[record];
            source = target.bind(tango)(source);
            source = source.t;
            source = source.0mUmIi;
            source = whiskey.bind(equality)(source);
            yankee['title'] = source;
            foxtrot = result.bind(tango)(foxtrot, yankee);
            yankee = new Array(7);
            yankee[0] = foxtrot;
            source = _closure1_slot17;
            foxtrot = 37;
            foxtrot = vacuum[foxtrot];
            result = sierra.bind(tango)(foxtrot);
            foxtrot = {};
            foxtrot['attachments'] = papa;
            papa = function(argFoo) { // Original name: handlePressAttachment
                entity = argFoo;
                var _closure3_slot0 = entity;
                zulu = _closure2_slot4;
                entity = undefined;
                mike = function(argFoo) {
                    zulu = argFoo;
                    mike = zulu.filter;
                    entity = function(argFoo) {
                        mike = _closure3_slot0;
                        entity = argFoo;
                        entity = entity !== mike;
                        return entity;
                    };
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                mike = zulu.bind(entity)(mike);
                zulu = _closure1_slot0;
                tango = _closure1_slot2;
                mike = 29;
                mike = tango[mike];
                zulu = zulu.bind(entity)(mike);
                mike = zulu.DeprecatedLayoutAnimation;
                mike = mike.bind(zulu)();
                return entity;
            };
            foxtrot['onPressAttachment'] = papa;
            foxtrot = source.bind(tango)(result, foxtrot);
            yankee[1] = foxtrot;
            papa = _closure1_slot17;
            foxtrot = 38;
            result = vacuum[foxtrot];
            source = sierra.bind(tango)(result);
            result = {};
            result['value'] = lima;
            result['onChangeText'] = status;
            status = 39;
            status = vacuum[status];
            status = sierra.bind(tango)(status);
            result['icon'] = status;
            status = context.commentColors;
            status = status.backgroundColor;
            result['backgroundColor'] = status;
            status = context.commentColors;
            status = status.color;
            result['placeholderTextColor'] = status;
            status = vacuum[record];
            status = target.bind(tango)(status);
            lima = status.intl;
            sierra = lima.string;
            status = vacuum[record];
            status = target.bind(tango)(status);
            status = status.t;
            status = status.i4GlAQ;
            status = sierra.bind(lima)(status);
            result['placeholder'] = status;
            result = papa.bind(tango)(source, result);
            yankee[2] = result;
            source = _closure1_slot17;
            result = {};
            result['ref'] = config;
            result = source.bind(tango)(mike, result);
            yankee[3] = result;
            source = _closure1_slot17;
            sizing = vacuum[sizing];
            sizing = target.bind(tango)(sizing);
            result = sizing.FormTitle;
            sizing = {};
            config = vacuum[record];
            config = target.bind(tango)(config);
            papa = config.intl;
            config = papa.string;
            vacuum = vacuum[record];
            vacuum = target.bind(tango)(vacuum);
            vacuum = vacuum.t;
            vacuum = vacuum.MR7/kp;
            vacuum = config.bind(papa)(vacuum);
            sizing['title'] = vacuum;
            sizing = source.bind(tango)(result, sizing);
            yankee[4] = sizing;
            if(!(kilo == update)) { _fun00006_ip = 1809; continue _fun00005 }
 1659:
            sizing = _closure1_slot17;
            source = _closure1_slot1;
            result = _closure1_slot2;
            foxtrot = result[foxtrot];
            kilo = source.bind(tango)(foxtrot);
            foxtrot = {};
            foxtrot['value'] = control;
            foxtrot['onChangeText'] = echo;
            echo = 42;
            echo = result[echo];
            echo = source.bind(tango)(echo);
            foxtrot['icon'] = echo;
            echo = context.searchColors;
            echo = echo.backgroundColor;
            foxtrot['backgroundColor'] = echo;
            echo = context.searchColors;
            echo = echo.color;
            foxtrot['placeholderTextColor'] = echo;
            control = _closure1_slot0;
            echo = result[record];
            echo = control.bind(tango)(echo);
            source = echo.intl;
            echo = source.string;
            result = result[record];
            result = control.bind(tango)(result);
            result = result.t;
            result = result.Z+oF8v;
            result = echo.bind(source)(result);
            foxtrot['placeholder'] = result;
            foxtrot['onFocus'] = output;
            foxtrot = sizing.bind(tango)(kilo, foxtrot);
            _fun00006_ip = 2035; continue _fun00005;
 1809:
            output = _closure1_slot18;
            sizing = _closure1_slot6;
            kilo = {};
            result = context.selectedResultContainer;
            kilo['style'] = result;
            echo = _closure1_slot17;
            result = {};
            source = context.selectedResult;
            result['style'] = source;
            result['children'] = update;
            echo = echo.bind(tango)(sizing, result);
            result = new Array(2);
            result[0] = echo;
            source = _closure1_slot17;
            config = _closure1_slot0;
            control = _closure1_slot2;
            vacuum = 40;
            echo = control[vacuum];
            echo = config.bind(tango)(echo);
            update = echo.CircularIconButton;
            echo = {};
            context = context.selectedResultCancelIcon;
            echo['style'] = context;
            context = _closure1_slot1;
            sequence = 41;
            sequence = control[sequence];
            sequence = context.bind(tango)(sequence);
            echo['source'] = sequence;
            vacuum = control[vacuum];
            vacuum = config.bind(tango)(vacuum);
            vacuum = vacuum.CircularIconButton;
            vacuum = vacuum.Sizes;
            vacuum = vacuum.LARGE_40;
            echo['size'] = vacuum;
            vacuum = function() { // Original name: onPress
                zulu = _closure2_slot14;
                mike = undefined;
                entity = null;
                entity = zulu.bind(mike)(entity);
                return entity;
            };
            echo['onPress'] = vacuum;
            vacuum = control[record];
            vacuum = config.bind(tango)(vacuum);
            sequence = vacuum.intl;
            vacuum = sequence.string;
            control = control[record];
            control = config.bind(tango)(control);
            control = control.t;
            control = control.cpT0Cg;
            control = vacuum.bind(sequence)(control);
            echo['accessibilityLabel'] = control;
            echo = source.bind(tango)(update, echo);
            result[1] = echo;
            kilo['children'] = result;
            foxtrot = output.bind(tango)(sizing, kilo);
 2035:
            yankee[5] = foxtrot;
            foxtrot = backup.map;
            romeo = function(argFoo) {
                tango = _closure1_slot22;
                zulu = _closure2_slot14;
                mike = undefined;
                entity = argFoo;
                entity = tango.bind(mike)(entity, zulu);
                return entity;
            };
            romeo = foxtrot.bind(backup)(romeo);
            yankee[6] = romeo;
            options['children'] = yankee;
            options = offset.bind(tango)(verify, options);
            report['children'] = options;
            report = golf.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = tango;
    zulu['renderSearchResult'] = mike;
    return entity;
})();