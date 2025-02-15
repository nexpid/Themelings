// app/modules/create_guild/native/components/GuildInvite.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    romeo = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeo;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: SeeMoreFooter
        entity = argFoo;
        report = entity.openInviteSheet;
        entity = _closure1_slot22;
        tango = undefined;
        romeo = entity.bind(tango)();
        zulu = _closure1_slot19;
        options = _closure1_slot0;
        verify = _closure1_slot2;
        entity = 15;
        entity = verify[entity];
        entity = options.bind(tango)(entity);
        mike = entity.TableRow;
        entity = {};
        offset = _closure1_slot19;
        golf = _closure1_slot6;
        oscar = {};
        romeo = romeo.friendIcon;
        oscar['style'] = romeo;
        foxtrot = _closure1_slot19;
        yankee = 16;
        yankee = verify[yankee];
        yankee = options.bind(tango)(yankee);
        romeo = yankee.GroupIcon;
        yankee = {};
        backup = 'sm';
        yankee['size'] = backup;
        yankee = foxtrot.bind(tango)(romeo, yankee);
        oscar['children'] = yankee;
        oscar = offset.bind(tango)(golf, oscar);
        entity['icon'] = oscar;
        entity['onPress'] = report;
        report = 17;
        oscar = verify[report];
        oscar = options.bind(tango)(oscar);
        golf = oscar.intl;
        oscar = golf.string;
        report = verify[report];
        report = options.bind(tango)(report);
        report = report.t;
        report = report.zrLIIy;
        report = oscar.bind(golf)(report);
        entity['label'] = report;
        report = true;
        entity['end'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot23 = entity;
    entity = function(argFoo) { // Original name: GuildInviteSuggestionRows
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            mike = entity.invite;
            var _closure2_slot0 = mike;
            romeo = entity.suggestions;
            var _closure2_slot1 = romeo;
            backup = entity.openInviteSheet;
            entity = _closure1_slot22;
            report = undefined;
            foxtrot = entity.bind(report)();
            tango = _closure1_slot4;
            zulu = tango.useMemo;
            mike = new Array(1);
            mike[0] = romeo;
            entity = function() {
                tango = _closure2_slot1;
                zulu = tango.slice;
                mike = _closure1_slot21;
                entity = 0;
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            kilo = zulu.bind(tango)(entity, mike);
            zulu = romeo.length;
            mike = 0;
            entity = null;
            if(!(mike !== zulu)) { _fun00002_ip = 231; continue _fun00001 }
 90:
            tango = _closure1_slot19;
            zulu = _closure1_slot6;
            mike = {};
            oscar = foxtrot.suggestionsContainer;
            mike['style'] = oscar;
            options = _closure1_slot19;
            golf = _closure1_slot7;
            oscar = {};
            oscar['data'] = kilo;
            kilo = function(argFoo) { // Original name: renderItem
                entity = argFoo;
                report = entity.item;
                oscar = entity.index;
                tango = _closure1_slot19;
                mike = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 18;
                entity = zulu[entity];
                zulu = undefined;
                mike = mike.bind(zulu)(entity);
                entity = {};
                entity['row'] = report;
                report = _closure2_slot0;
                report = report.code;
                entity['code'] = report;
                report = 0;
                report = report === oscar;
                entity['start'] = report;
                entity = tango.bind(zulu)(mike, entity);
                return entity;
            };
            oscar['renderItem'] = kilo;
            foxtrot = foxtrot.suggestionRowsContainer;
            oscar['contentContainerStyle'] = foxtrot;
            foxtrot = romeo.length;
            romeo = _closure1_slot21;
            romeo = foxtrot > romeo;
            offset = null;
            if(!romeo) { _fun00002_ip = 186; continue _fun00001 }
 165:
            foxtrot = _closure1_slot19;
            romeo = _closure1_slot23;
            yankee = {};
            yankee['openInviteSheet'] = backup;
            offset = foxtrot.bind(report)(romeo, yankee);
 186:
            oscar['ListFooterComponent'] = offset;
            offset = function() { // Original name: ItemSeparatorComponent
                tango = _closure1_slot19;
                mike = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 19;
                entity = zulu[entity];
                zulu = undefined;
                entity = mike.bind(zulu)(entity);
                mike = entity.FormDivider;
                entity = {};
                report = true;
                entity['iconPush'] = report;
                entity = tango.bind(zulu)(mike, entity);
                return entity;
            };
            oscar['ItemSeparatorComponent'] = offset;
            verify = function(argFoo) { // Original name: keyExtractor
                entity = argFoo;
                entity = entity.item;
                entity = entity.id;
                return entity;
            };
            oscar['keyExtractor'] = verify;
            oscar = options.bind(report)(golf, oscar);
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 231:
            return entity;
        }
    };
    var _closure1_slot24 = entity;
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
    yankee = 1;
    golf = oscar[yankee];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.Image;
    var _closure1_slot5 = golf;
    golf = tango.View;
    var _closure1_slot6 = golf;
    tango = tango.FlatList;
    var _closure1_slot7 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.useInstantInviteSendStates;
    var _closure1_slot8 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 6;
    golf = oscar[tango];
    golf = romeo.bind(entity)(golf);
    var _closure1_slot11 = golf;
    golf = 7;
    golf = oscar[golf];
    golf = romeo.bind(entity)(golf);
    var _closure1_slot12 = golf;
    backup = 8;
    golf = oscar[backup];
    golf = report.bind(entity)(golf);
    golf = golf.CreateGuildModalStates;
    var _closure1_slot13 = golf;
    golf = 9;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    options = golf.AnalyticEvents;
    var _closure1_slot14 = options;
    options = golf.AnalyticsSections;
    var _closure1_slot15 = options;
    options = golf.InstantInviteSources;
    var _closure1_slot16 = options;
    options = golf.Permissions;
    var _closure1_slot17 = options;
    golf = golf.SearchTypes;
    var _closure1_slot18 = golf;
    golf = 10;
    options = oscar[golf];
    options = report.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot19 = options;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    golf = golf.jsxs;
    var _closure1_slot20 = golf;
    var _closure1_slot21 = tango;
    tango = 11;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {};
    offset = 12;
    foxtrot = oscar[offset];
    foxtrot = report.bind(entity)(foxtrot);
    foxtrot = foxtrot.NAV_BAR_HEIGHT;
    verify['marginTop'] = foxtrot;
    verify['flex'] = yankee;
    yankee = 13;
    foxtrot = oscar[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.BACKGROUND_MOBILE_PRIMARY;
    verify['backgroundColor'] = foxtrot;
    foxtrot = 'center';
    verify['alignItems'] = foxtrot;
    tango['container'] = verify;
    verify = {};
    verify['marginBottom'] = backup;
    tango['header'] = verify;
    foxtrot = 16;
    verify = {'lineHeight': 18, 'marginBottom': 8, 'paddingHorizontal': 16, 'textAlign': 'center'};
    tango['description'] = verify;
    verify = {};
    verify['marginVertical'] = foxtrot;
    tango['headerImage'] = verify;
    verify = {'paddingHorizontal': 16, 'width': '100%'};
    tango['linkContainer'] = verify;
    verify = {'marginTop': 16, 'flexDirection': 'row', 'alignItems': 'center', 'backgroundColor': null, 'borderRadius': null, 'padding': 12, 'justifyContent': 'space-between'};
    kilo = oscar[yankee];
    kilo = romeo.bind(entity)(kilo);
    kilo = kilo.colors;
    kilo = kilo.BACKGROUND_TERTIARY;
    verify['backgroundColor'] = kilo;
    kilo = oscar[yankee];
    kilo = romeo.bind(entity)(kilo);
    kilo = kilo.radii;
    kilo = kilo.xs;
    verify['borderRadius'] = kilo;
    tango['linkButton'] = verify;
    verify = {};
    verify['marginLeft'] = foxtrot;
    tango['searchButton'] = verify;
    verify = {};
    verify['marginLeft'] = backup;
    kilo = oscar[yankee];
    kilo = romeo.bind(entity)(kilo);
    kilo = kilo.colors;
    kilo = kilo.INTERACTIVE_NORMAL;
    verify['tintColor'] = kilo;
    tango['linkButtonIcon'] = verify;
    verify = {};
    verify['marginTop'] = backup;
    tango['inviteDetail'] = verify;
    verify = {};
    verify['marginVertical'] = foxtrot;
    tango['shareButton'] = verify;
    verify = {'width': '100%', 'flex': 1, 'alignContent': 'flex-start'};
    tango['suggestionsContainer'] = verify;
    verify = {'backgroundColor': null, 'height': 32, 'width': 32, 'padding': 8, 'alignItems': 'center', 'justifyContent': 'center'};
    foxtrot = oscar[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.BACKGROUND_TERTIARY;
    verify['backgroundColor'] = foxtrot;
    yankee = oscar[yankee];
    yankee = romeo.bind(entity)(yankee);
    yankee = yankee.radii;
    yankee = yankee.xxl;
    verify['borderRadius'] = yankee;
    tango['friendIcon'] = verify;
    verify = {};
    verify['marginHorizontal'] = offset;
    tango['suggestionRowsContainer'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot22 = tango;
    tango = 37;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/create_guild/native/components/GuildInvite.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: GuildInvite
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            mike = entity.closeOnEditInviteLink;
            report = undefined;
            if(!(mike === report)) { _fun00004_ip = 19; continue _fun00003 }
 17:
            mike = true;
 19:
            var _closure2_slot0 = mike;
            yankee = entity.onClose;
            var _closure2_slot1 = yankee;
            var _closure2_slot2 = report;
            var _closure2_slot3 = report;
            var _closure2_slot4 = report;
            var _closure2_slot5 = report;
            var _closure2_slot6 = report;
            var _closure2_slot7 = report;
            var _closure2_slot8 = report;
            entity = _closure1_slot22;
            sizing = entity.bind(report)();
            verify = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 20;
            entity = tango[entity];
            mike = verify.bind(report)(entity);
            entity = mike.useNavigation;
            romeo = entity.bind(mike)();
            _closure2_slot2 = romeo;
            zulu = _closure1_slot4;
            mike = zulu.useState;
            entity = false;
            mike = mike.bind(zulu)(entity);
            golf = _closure1_slot3;
            entity = 2;
            mike = golf.bind(report)(mike, entity);
            zulu = 0;
            entity = mike[zulu];
            _closure2_slot3 = entity;
            oscar = 1;
            mike = mike[oscar];
            _closure2_slot4 = mike;
            options = 21;
            mike = tango[options];
            output = verify.bind(report)(mike);
            backup = output.useStateFromStores;
            mike = _closure1_slot10;
            foxtrot = new Array(1);
            foxtrot[0] = mike;
            offset = function() {
                mike = _closure1_slot10;
                entity = mike.getInvite;
                entity = entity.bind(mike)();
                return entity;
            };
            offset = backup.bind(output)(foxtrot, offset);
            _closure2_slot5 = offset;
            options = tango[options];
            foxtrot = verify.bind(report)(options);
            verify = foxtrot.useStateFromStores;
            options = new Array(3);
            options[0] = mike;
            mike = _closure1_slot9;
            options[1] = mike;
            mike = _closure1_slot11;
            options[2] = mike;
            mike = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zulu = _closure1_slot10;
                    mike = zulu.getInviteSettings;
                    tango = mike.bind(zulu)();
                    mike = null;
                    report = mike == tango;
                    zulu = undefined;
                    if(report) { _fun00006_ip = 33; continue _fun00005 }
 28:
                    zulu = tango.channelId;
 33:
                    if(!(mike == zulu)) { _fun00006_ip = 91; continue _fun00005 }
 37:
                    report = _closure1_slot10;
                    tango = report.getGuildId;
                    options = tango.bind(report)();
                    tango = mike != options;
                    mike = null;
                    if(!tango) { _fun00006_ip = 89; continue _fun00005 }
 60:
                    golf = _closure1_slot11;
                    oscar = golf.getDefaultChannel;
                    tango = _closure1_slot17;
                    report = tango.CREATE_INSTANT_INVITE;
                    tango = true;
                    mike = oscar.bind(golf)(options, tango, report);
 89:
                    return mike;
 91:
                    mike = _closure1_slot9;
                    entity = mike.getChannel;
                    entity = entity.bind(mike)(zulu);
                    return entity;
                }
            };
            context = verify.bind(foxtrot)(options, mike);
            _closure2_slot6 = context;
            verify = _closure1_slot4;
            options = verify.useState;
            mike = function() {
                mike = _closure1_slot12;
                entity = mike.getInviteSuggestionRows;
                entity = entity.bind(mike)();
                return entity;
            };
            mike = options.bind(verify)(mike);
            mike = golf.bind(report)(mike, oscar);
            options = mike[zulu];
            mike = _closure1_slot8;
            oscar = mike.bind(report)();
            _closure2_slot7 = oscar;
            mike = _closure1_slot1;
            golf = 22;
            golf = tango[golf];
            verify = mike.bind(report)(golf);
            golf = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 23;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.loadInviteSuggestions;
                mike = {};
                report = global;
                report = report.Set;
                oscar = report.prototype;
                oscar = Object.create(oscar, {constructor: {value: report}});
                options = oscar;
                report = new options[report](golf);
                report = report instanceof Object ? report : oscar;
                mike['omitUserIds'] = report;
                report = _closure2_slot6;
                mike['channel'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            golf = verify.bind(report)(golf);
            foxtrot = _closure1_slot4;
            verify = foxtrot.useEffect;
            golf = new Array(2);
            golf[0] = oscar;
            golf[1] = offset;
            oscar = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    mike = _closure2_slot5;
                    zulu = null;
                    if(!(zulu != mike)) { _fun00008_ip = 47; continue _fun00007 }
 13:
                    tango = _closure2_slot7;
                    mike = _closure2_slot5;
                    mike = mike.code;
                    mike = tango[mike];
                    if(!(zulu != mike)) { _fun00008_ip = 47; continue _fun00007 }
 34:
                    zulu = _closure2_slot4;
                    mike = undefined;
                    entity = true;
                    entity = zulu.bind(mike)(entity);
 47:
                    entity = undefined;
                    return entity;
                }
            };
            oscar = verify.bind(foxtrot)(oscar, golf);
            verify = _closure1_slot4;
            golf = verify.useLayoutEffect;
            oscar = new Array(3);
            oscar[0] = romeo;
            oscar[1] = yankee;
            oscar[2] = entity;
            entity = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    tango = _closure2_slot2;
                    zulu = tango.setOptions;
                    mike = {};
                    verify = _closure1_slot0;
                    options = _closure1_slot2;
                    entity = 24;
                    options = options[entity];
                    entity = undefined;
                    verify = verify.bind(entity)(options);
                    options = verify.getHeaderTextButton;
                    golf = _closure2_slot3;
                    romeo = _closure1_slot0;
                    foxtrot = _closure1_slot2;
                    oscar = 17;
                    offset = foxtrot[oscar];
                    offset = romeo.bind(entity)(offset);
                    yankee = offset.intl;
                    offset = yankee.string;
                    oscar = foxtrot[oscar];
                    oscar = romeo.bind(entity)(oscar);
                    oscar = oscar.t;
                    if(golf) { _fun00010_ip = 112; continue _fun00009 }
 99:
                    golf = oscar.5WxrcX;
                    golf = offset.bind(yankee)(golf);
                    _fun00010_ip = 123; continue _fun00009;
 112:
                    oscar = oscar.i4jeWV;
                    golf = offset.bind(yankee)(oscar);
 123:
                    oscar = function() {
                        zulu = _closure2_slot1;
                        entity = undefined;
                        zulu = zulu.bind(entity)();
                        mike = _closure2_slot3;
                        oscar = !mike;
                        zulu = _closure1_slot1;
                        tango = _closure1_slot2;
                        mike = 14;
                        mike = tango[mike];
                        report = zulu.bind(entity)(mike);
                        tango = report.track;
                        mike = _closure1_slot14;
                        zulu = mike.USER_FLOW_TRANSITION;
                        mike = {};
                        options = _closure1_slot15;
                        options = options.GUILD_CREATE_MODAL;
                        mike['flow_type'] = options;
                        golf = _closure1_slot13;
                        golf = golf.GUILD_INVITE;
                        mike['from_step'] = golf;
                        golf = 'modal_closed';
                        mike['to_step'] = golf;
                        mike['skip'] = oscar;
                        mike = tango.bind(report)(zulu, mike);
                        return entity;
                    };
                    oscar = options.bind(verify)(golf, oscar);
                    mike['headerRight'] = oscar;
                    report = function() { // Original name: headerLeft
                        entity = null;
                        return entity;
                    };
                    mike['headerLeft'] = report;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                }
            };
            entity = golf.bind(verify)(entity, oscar);
            entity = 25;
            entity = tango[entity];
            tango = mike.bind(report)(entity);
            entity = null;
            oscar = entity == offset;
            mike = undefined;
            if(oscar) { _fun00004_ip = 429; continue _fun00003 }
 424:
            mike = offset.code;
 429:
            update = tango.bind(report)(mike);
            _closure2_slot8 = update;
            verify = entity != options;
            if(!verify) { _fun00004_ip = 454; continue _fun00003 }
 445:
            mike = options.length;
            verify = mike > zulu;
 454:
            oscar = _closure1_slot4;
            tango = oscar.useCallback;
            zulu = new Array(1);
            zulu[0] = context;
            mike = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zulu = _closure2_slot6;
                    mike = null;
                    if(!(mike != zulu)) { _fun00012_ip = 53; continue _fun00011 }
 13:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 26;
                    zulu = zulu[mike];
                    mike = undefined;
                    zulu = tango.bind(mike)(zulu);
                    mike = zulu.openGuildInviteScreen;
                    entity = _closure2_slot6;
                    entity = mike.bind(zulu)(entity);
 53:
                    entity = undefined;
                    return entity;
                }
            };
            config = tango.bind(oscar)(mike, zulu);
            oscar = _closure1_slot4;
            tango = oscar.useCallback;
            zulu = new Array(3);
            zulu[0] = context;
            golf = entity == offset;
            mike = undefined;
            if(golf) { _fun00004_ip = 515; continue _fun00003 }
 510:
            mike = offset.code;
 515:
            zulu[1] = mike;
            zulu[2] = update;
            mike = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    mike = _closure2_slot6;
                    report = null;
                    if(!(report != mike)) { _fun00014_ip = 120; continue _fun00013 }
 13:
                    oscar = _closure1_slot0;
                    zulu = _closure1_slot2;
                    verify = 27;
                    tango = zulu[verify];
                    zulu = undefined;
                    golf = oscar.bind(zulu)(tango);
                    oscar = golf.handleOpenShareSheet;
                    tango = _closure2_slot5;
                    tango = report == tango;
                    report = undefined;
                    if(tango) { _fun00014_ip = 66; continue _fun00013 }
 57:
                    tango = _closure2_slot5;
                    report = tango.code;
 66:
                    tango = _closure2_slot6;
                    options = _closure1_slot0;
                    mike = _closure1_slot2;
                    mike = mike[verify];
                    verify = options.bind(zulu)(mike);
                    options = verify.getShareMessage;
                    mike = _closure2_slot8;
                    mike = options.bind(verify)(mike);
                    mike = oscar.bind(golf)(report, tango, mike);
                    mike = _closure2_slot4;
                    entity = true;
                    entity = mike.bind(zulu)(entity);
 120:
                    entity = undefined;
                    return entity;
                }
            };
            result = tango.bind(oscar)(mike, zulu);
            oscar = _closure1_slot4;
            tango = oscar.useCallback;
            zulu = new Array(2);
            zulu[0] = offset;
            zulu[1] = context;
            mike = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    entity = _closure2_slot5;
                    zulu = null;
                    entity = zulu != entity;
                    if(!entity) { _fun00016_ip = 24; continue _fun00015 }
 16:
                    mike = _closure2_slot6;
                    entity = zulu != mike;
 24:
                    if(!entity) { _fun00016_ip = 152; continue _fun00015 }
 30:
                    zulu = _closure1_slot1;
                    report = _closure1_slot2;
                    mike = 28;
                    mike = report[mike];
                    tango = undefined;
                    options = zulu.bind(tango)(mike);
                    golf = options.trackWithMetadata;
                    mike = _closure1_slot14;
                    zulu = mike.SEARCH_STARTED;
                    mike = {};
                    verify = _closure1_slot18;
                    verify = verify.INSTANT_INVITE;
                    mike['search_type'] = verify;
                    mike = golf.bind(options)(zulu, mike);
                    zulu = _closure1_slot0;
                    mike = 27;
                    mike = report[mike];
                    report = zulu.bind(tango)(mike);
                    tango = report.showInstantInviteActionSheet;
                    zulu = _closure2_slot6;
                    entity = _closure1_slot16;
                    mike = entity.GUILD_CREATE;
                    entity = {};
                    oscar = _closure2_slot5;
                    oscar = oscar.code;
                    entity['code'] = oscar;
                    entity = tango.bind(report)(zulu, mike, entity);
 152:
                    entity = undefined;
                    return entity;
                }
            };
            oscar = tango.bind(oscar)(mike, zulu);
            if(!(entity != offset)) { _fun00004_ip = 1444; continue _fun00003 }
 577:
            if(!(entity != context)) { _fun00004_ip = 1444; continue _fun00003 }
 584:
            golf = verify;
            if(!golf) { _fun00004_ip = 621; continue _fun00003 }
 590:
            tango = _closure1_slot19;
            zulu = _closure1_slot24;
            mike = {};
            mike['invite'] = offset;
            mike['suggestions'] = options;
            mike['openInviteSheet'] = oscar;
            golf = tango.bind(report)(zulu, mike);
 621:
            tango = _closure1_slot20;
            echo = _closure1_slot0;
            romeo = _closure1_slot2;
            mike = 29;
            mike = romeo[mike];
            mike = echo.bind(report)(mike);
            zulu = mike.SafeAreaPaddingView;
            mike = {};
            record = true;
            mike['top'] = record;
            oscar = sizing.container;
            mike['style'] = oscar;
            offset = _closure1_slot19;
            foxtrot = 30;
            oscar = romeo[foxtrot];
            oscar = echo.bind(report)(oscar);
            options = oscar.Text;
            oscar = {'style': null, 'accessibilityRole': 'header', 'variant': 'heading-xl/extrabold', 'color': 'header-primary'};
            yankee = sizing.header;
            oscar['style'] = yankee;
            vacuum = 17;
            yankee = romeo[vacuum];
            yankee = echo.bind(report)(yankee);
            output = yankee.intl;
            backup = output.string;
            yankee = romeo[vacuum];
            yankee = echo.bind(report)(yankee);
            yankee = yankee.t;
            yankee = yankee.OZ1qhI;
            yankee = backup.bind(output)(yankee);
            oscar['children'] = yankee;
            options = offset.bind(report)(options, oscar);
            oscar = new Array(5);
            oscar[0] = options;
            yankee = _closure1_slot19;
            options = romeo[foxtrot];
            options = echo.bind(report)(options);
            offset = options.Text;
            options = {'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
            backup = sizing.description;
            options['style'] = backup;
            backup = romeo[vacuum];
            backup = echo.bind(report)(backup);
            output = backup.intl;
            backup = output.string;
            romeo = romeo[vacuum];
            romeo = echo.bind(report)(romeo);
            romeo = romeo.t;
            romeo = romeo.eU2ZaG;
            romeo = backup.bind(output)(romeo);
            options['children'] = romeo;
            options = yankee.bind(report)(offset, options);
            oscar[1] = options;
            options = !verify;
            if(verify) { _fun00004_ip = 945; continue _fun00003 }
 886:
            yankee = _closure1_slot19;
            offset = _closure1_slot5;
            verify = {};
            backup = _closure1_slot1;
            output = _closure1_slot2;
            romeo = 31;
            romeo = output[romeo];
            romeo = backup.bind(report)(romeo);
            verify['source'] = romeo;
            romeo = 'contain';
            verify['resizeMode'] = romeo;
            romeo = sizing.headerImage;
            verify['style'] = romeo;
            options = yankee.bind(report)(offset, verify);
 945:
            oscar[2] = options;
            offset = _closure1_slot20;
            verify = _closure1_slot6;
            options = {};
            yankee = sizing.linkContainer;
            options['style'] = yankee;
            control = _closure1_slot0;
            echo = _closure1_slot2;
            yankee = 32;
            yankee = echo[yankee];
            yankee = control.bind(report)(yankee);
            romeo = yankee.PressableOpacity;
            yankee = {};
            backup = sizing.linkButton;
            yankee['style'] = backup;
            backup = 'button';
            yankee['accessibilityRole'] = backup;
            backup = echo[vacuum];
            backup = control.bind(report)(backup);
            source = backup.intl;
            output = source.string;
            backup = echo[vacuum];
            backup = control.bind(report)(backup);
            backup = backup.t;
            backup = backup.3XVNys;
            backup = output.bind(source)(backup);
            yankee['accessibilityLabel'] = backup;
            backup = function() { // Original name: onPress
                tango = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 27;
                mike = mike[entity];
                entity = undefined;
                golf = tango.bind(entity)(mike);
                oscar = golf.handleCopy;
                tango = _closure2_slot5;
                report = tango.code;
                tango = _closure2_slot6;
                zulu = _closure1_slot16;
                zulu = zulu.GUILD_CREATE;
                zulu = oscar.bind(golf)(report, tango, zulu);
                zulu = _closure2_slot4;
                mike = true;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            yankee['onPress'] = backup;
            output = _closure1_slot19;
            foxtrot = echo[foxtrot];
            foxtrot = control.bind(report)(foxtrot);
            backup = foxtrot.Text;
            foxtrot = {'variant': 'text-sm/medium', 'color': 'header-primary'};
            foxtrot['children'] = update;
            backup = output.bind(report)(backup, foxtrot);
            foxtrot = new Array(2);
            foxtrot[0] = backup;
            source = _closure1_slot19;
            update = _closure1_slot1;
            backup = 33;
            backup = echo[backup];
            output = update.bind(report)(backup);
            backup = {};
            papa = 34;
            papa = echo[papa];
            papa = update.bind(report)(papa);
            backup['source'] = papa;
            papa = sizing.linkButtonIcon;
            backup['style'] = papa;
            backup = source.bind(report)(output, backup);
            foxtrot[1] = backup;
            yankee['children'] = foxtrot;
            romeo = offset.bind(report)(romeo, yankee);
            yankee = new Array(3);
            yankee[0] = romeo;
            backup = _closure1_slot19;
            foxtrot = _closure1_slot6;
            romeo = {};
            output = sizing.inviteDetail;
            romeo['style'] = output;
            source = _closure1_slot19;
            output = 35;
            output = echo[output];
            update = update.bind(report)(output);
            output = {};
            output['channel'] = context;
            output['canEditInvite'] = record;
            output['callbackActionSheet'] = config;
            sequence = function() { // Original name: onEdit
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    mike = _closure2_slot0;
                    if(!mike) { _fun00018_ip = 20; continue _fun00017 }
 10:
                    mike = _closure2_slot1;
                    entity = undefined;
                    entity = mike.bind(entity)();
 20:
                    entity = undefined;
                    return entity;
                }
            };
            output['onEdit'] = sequence;
            sequence = _closure1_slot16;
            sequence = sequence.GUILD_CREATE;
            output['source'] = sequence;
            output = source.bind(report)(update, output);
            romeo['children'] = output;
            romeo = backup.bind(report)(foxtrot, romeo);
            yankee[1] = romeo;
            backup = _closure1_slot19;
            foxtrot = _closure1_slot6;
            romeo = {};
            sizing = sizing.shareButton;
            romeo['style'] = sizing;
            output = _closure1_slot19;
            kilo = 36;
            kilo = echo[kilo];
            kilo = control.bind(report)(kilo);
            sizing = kilo.Button;
            kilo = {};
            update = echo[vacuum];
            update = control.bind(report)(update);
            source = update.intl;
            update = source.string;
            echo = echo[vacuum];
            echo = control.bind(report)(echo);
            echo = echo.t;
            echo = echo.Ej3B3d;
            echo = update.bind(source)(echo);
            kilo['text'] = echo;
            kilo['onPress'] = result;
            kilo = output.bind(report)(sizing, kilo);
            romeo['children'] = kilo;
            romeo = backup.bind(report)(foxtrot, romeo);
            yankee[2] = romeo;
            options['children'] = yankee;
            options = offset.bind(report)(verify, options);
            oscar[3] = options;
            oscar[4] = golf;
            mike['children'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return mike;
 1444:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();