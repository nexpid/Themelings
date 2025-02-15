// app/modules/main_tabs_v2/native/sidebar/details/ChannelDetailsNavigator.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    verify = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: ConnectedCreateThreadHeaderButton
        _fun119696: for(var _fun119696_ip = 0; ; ) switch(_fun119696_ip) {
 0:
            mike = argFoo;
            mike = mike.channelId;
            var _closure2_slot0 = mike;
            tango = _closure1_slot0;
            report = _closure1_slot2;
            zulu = 7;
            zulu = report[zulu];
            report = undefined;
            oscar = tango.bind(report)(zulu);
            tango = oscar.useStateFromStores;
            golf = _closure1_slot4;
            zulu = new Array(1);
            zulu[0] = golf;
            entity = function() {
                zulu = _closure1_slot4;
                mike = zulu.getChannel;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            oscar = tango.bind(oscar)(zulu, entity);
            entity = null;
            zulu = entity == oscar;
            if(zulu) { _fun119696_ip = 98; continue _fun119696 }
 78:
            tango = _closure1_slot8;
            zulu = _closure1_slot13;
            mike = {};
            mike['channel'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 98:
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: CreateThreadHeaderButton
        _fun119698: for(var _fun119698_ip = 0; ; ) switch(_fun119698_ip) {
 0:
            mike = argFoo;
            options = mike.channel;
            var _closure2_slot0 = options;
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 8;
            mike = tango[mike];
            report = undefined;
            zulu = zulu.bind(report)(mike);
            mike = zulu.useCanStartThread;
            mike = mike.bind(zulu)(options);
            golf = _closure1_slot3;
            tango = golf.useCallback;
            zulu = new Array(1);
            zulu[0] = options;
            entity = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 9;
                mike = mike[entity];
                entity = undefined;
                report = zulu.bind(entity)(mike);
                tango = report.navigateToThreadCreation;
                zulu = _closure2_slot0;
                mike = 'Thread Browser Toolbar';
                mike = tango.bind(report)(zulu, mike);
                return entity;
            };
            golf = tango.bind(golf)(entity, zulu);
            entity = null;
            if(!mike) { _fun119698_ip = 198; continue _fun119698 }
 85:
            tango = _closure1_slot8;
            romeo = _closure1_slot0;
            options = _closure1_slot2;
            mike = 10;
            mike = options[mike];
            mike = romeo.bind(report)(mike);
            zulu = mike.HeaderIconButton;
            mike = {};
            verify = 11;
            offset = options[verify];
            offset = romeo.bind(report)(offset);
            yankee = offset.intl;
            offset = yankee.string;
            verify = options[verify];
            verify = romeo.bind(report)(verify);
            verify = verify.t;
            verify = verify.rBIGBA;
            verify = offset.bind(yankee)(verify);
            mike['accessibilityLabel'] = verify;
            mike['onPress'] = golf;
            golf = _closure1_slot1;
            oscar = 12;
            oscar = options[oscar];
            oscar = golf.bind(report)(oscar);
            mike['source'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 198:
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo) { // Original name: getHeaderLeft
        _fun119700: for(var _fun119700_ip = 0; ; ) switch(_fun119700_ip) {
 0:
            entity = argFoo;
            tango = entity.navigation;
            mike = entity.routeName;
            entity = entity.initialRouteName;
            if(!(entity !== mike)) { _fun119700_ip = 63; continue _fun119700 }
 25:
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 10;
            mike = mike[entity];
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            entity = mike.getRenderModalBackImage;
            entity = entity.bind(mike)(tango);
            _fun119700_ip = 99; continue _fun119700;
 63:
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            mike = 10;
            zulu = zulu[mike];
            mike = undefined;
            zulu = report.bind(mike)(zulu);
            mike = zulu.getRenderModalCloseImage;
            entity = mike.bind(zulu)(tango);
 99:
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    tango = global;
    offset = tango.Object;
    options = offset.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = options.bind(offset)(zulu, entity, golf);
    entity = 0;
    options = oscar[entity];
    golf = argCorge;
    entity = undefined;
    golf = golf.bind(entity)(options);
    var _closure1_slot3 = golf;
    options = 1;
    options = oscar[options];
    options = verify.bind(entity)(options);
    var _closure1_slot4 = options;
    options = 2;
    options = oscar[options];
    options = report.bind(entity)(options);
    options = options.ChannelDetailsNavigatorScreens;
    var _closure1_slot5 = options;
    options = 3;
    options = oscar[options];
    options = report.bind(entity)(options);
    options = options.AnalyticEvents;
    var _closure1_slot6 = options;
    options = 4;
    options = oscar[options];
    options = report.bind(entity)(options);
    options = options.SearchNavigatorScreens;
    var _closure1_slot7 = options;
    options = 5;
    verify = oscar[options];
    verify = report.bind(entity)(verify);
    verify = verify.jsx;
    var _closure1_slot8 = verify;
    options = oscar[options];
    options = report.bind(entity)(options);
    options = options.jsxs;
    var _closure1_slot9 = options;
    verify = tango.Object;
    options = verify.freeze;
    tango = {};
    tango = options.bind(verify)(tango);
    var _closure1_slot10 = tango;
    tango = 6;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    tango = options.createNativeStackNavigator;
    tango = tango.bind(options)();
    var _closure1_slot11 = tango;
    tango = golf.memo;
    mike = function(argFoo) {
        _fun119701: for(var _fun119701_ip = 0; ; ) switch(_fun119701_ip) {
 0:
            entity = argFoo;
            entity = entity.route;
            mike = entity.params;
            backup = mike.channelId;
            var _closure2_slot0 = backup;
            foxtrot = mike.search;
            entity = mike.source;
            var _closure2_slot1 = entity;
            report = mike.initialRouteName;
            tango = undefined;
            if(!(report === tango)) { _fun119701_ip = 66; continue _fun119701 }
 53:
            mike = _closure1_slot5;
            report = mike.DETAILS;
 66:
            var _closure2_slot2 = report;
            golf = _closure1_slot3;
            zulu = golf.useEffect;
            mike = new Array(3);
            mike[0] = backup;
            mike[1] = report;
            mike[2] = entity;
            entity = function() {
                _fun119702: for(var _fun119702_ip = 0; ; ) switch(_fun119702_ip) {
 0:
                    tango = _closure1_slot4;
                    zulu = tango.getChannel;
                    mike = _closure2_slot0;
                    oscar = zulu.bind(tango)(mike);
                    mike = null;
                    if(!(mike != oscar)) { _fun119702_ip = 127; continue _fun119702 }
 30:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 13;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.track;
                    entity = _closure1_slot6;
                    mike = entity.CHANNEL_SIDEBAR_VIEWED;
                    entity = {};
                    golf = oscar.id;
                    entity['channel_id'] = golf;
                    golf = oscar.getGuildId;
                    golf = golf.bind(oscar)();
                    entity['guild_id'] = golf;
                    oscar = oscar.type;
                    entity['channel_type'] = oscar;
                    oscar = _closure2_slot2;
                    entity['initial_route_name'] = oscar;
                    report = _closure2_slot1;
                    entity['source'] = report;
                    entity = zulu.bind(tango)(mike, entity);
 127:
                    entity = undefined;
                    return entity;
                }
            };
            entity = zulu.bind(golf)(entity, mike);
            golf = _closure1_slot3;
            zulu = golf.useMemo;
            mike = new Array(1);
            mike[0] = backup;
            entity = function() {
                entity = {};
                mike = {};
                zulu = _closure2_slot0;
                mike['channelId'] = zulu;
                entity['initialParams'] = mike;
                return entity;
            };
            kilo = zulu.bind(golf)(entity, mike);
            sizing = _closure1_slot0;
            output = _closure1_slot2;
            entity = 14;
            entity = output[entity];
            mike = sizing.bind(tango)(entity);
            entity = mike.useAccessibilityNativeStackOptions;
            yankee = entity.bind(mike)();
            golf = _closure1_slot3;
            zulu = golf.useMemo;
            mike = new Array(1);
            mike[0] = backup;
            entity = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 15;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.getChannelSettingsScreens;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            verify = zulu.bind(golf)(entity, mike);
            zulu = _closure1_slot9;
            golf = _closure1_slot11;
            mike = golf.Navigator;
            entity = {};
            offset = 'channel-details-navigator';
            entity['id'] = offset;
            offset = {};
            romeo = 10;
            romeo = output[romeo];
            romeo = sizing.bind(tango)(romeo);
            romeo = romeo.renderGenericTitle;
            offset['headerTitle'] = romeo;
            update = offset;
            echo = yankee;
            yankee = copyDataProperties(update, echo);
            entity['screenOptions'] = offset;
            entity['initialRouteName'] = report;
            romeo = _closure1_slot8;
            offset = golf.Screen;
            report = {};
            yankee = {};
            yankee['channelId'] = backup;
            yankee['search'] = foxtrot;
            report['initialParams'] = yankee;
            yankee = _closure1_slot5;
            foxtrot = yankee.DETAILS;
            report['name'] = foxtrot;
            foxtrot = {};
            backup = false;
            foxtrot['headerShown'] = backup;
            report['options'] = foxtrot;
            foxtrot = function() { // Original name: getComponent
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 16;
                mike = mike[entity];
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                entity = entity.default;
                return entity;
            };
            report['getComponent'] = foxtrot;
            offset = romeo.bind(tango)(offset, report);
            report = new Array(5);
            report[0] = offset;
            foxtrot = _closure1_slot8;
            romeo = golf.Screen;
            offset = {};
            backup = _closure1_slot7;
            backup = backup.SEARCH_CHAT_PREVIEW;
            offset['name'] = backup;
            backup = function(argFoo) { // Original name: options
                entity = argFoo;
                zulu = entity.route;
                var _closure3_slot0 = zulu;
                tango = entity.navigation;
                entity = {};
                zulu = function(argFoo) { // Original name: header
                    oscar = _closure1_slot0;
                    golf = _closure1_slot2;
                    entity = 10;
                    entity = golf[entity];
                    report = undefined;
                    zulu = oscar.bind(report)(entity);
                    mike = zulu.renderHeader;
                    entity = {};
                    options = argFoo;
                    verify = entity;
                    tango = copyDataProperties(verify, options);
                    tango = 17;
                    tango = golf[tango];
                    report = oscar.bind(report)(tango);
                    tango = report.isAndroid;
                    report = tango.bind(report)();
                    tango = 'shouldHandleSafeArea';
                    entity[tango] = report;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                entity['header'] = zulu;
                mike = function() { // Original name: headerTitle
                    tango = _closure1_slot8;
                    mike = _closure1_slot1;
                    zulu = _closure1_slot2;
                    entity = 18;
                    entity = zulu[entity];
                    zulu = undefined;
                    mike = mike.bind(zulu)(entity);
                    entity = {};
                    report = _closure3_slot0;
                    report = report.params;
                    report = report.channelId;
                    entity['channelId'] = report;
                    entity = tango.bind(zulu)(mike, entity);
                    return entity;
                };
                entity['headerTitle'] = mike;
                report = _closure1_slot0;
                zulu = _closure1_slot2;
                mike = 10;
                zulu = zulu[mike];
                mike = undefined;
                zulu = report.bind(mike)(zulu);
                mike = zulu.getRenderBackImage;
                mike = mike.bind(zulu)(tango);
                entity['headerLeft'] = mike;
                return entity;
            };
            offset['options'] = backup;
            backup = function() { // Original name: getComponent
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 19;
                mike = mike[entity];
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                entity = entity.default;
                return entity;
            };
            offset['getComponent'] = backup;
            offset = foxtrot.bind(tango)(romeo, offset);
            report[1] = offset;
            output = _closure1_slot8;
            sizing = golf.Screen;
            offset = {};
            update = offset;
            echo = kilo;
            romeo = copyDataProperties(update, echo);
            romeo = yankee.MUTE;
            backup = 'name';
            offset[backup] = romeo;
            romeo = function(argFoo) { // Original name: options
                entity = argFoo;
                oscar = entity.navigation;
                report = entity.route;
                entity = {};
                verify = _closure1_slot0;
                offset = _closure1_slot2;
                zulu = 11;
                golf = offset[zulu];
                tango = undefined;
                golf = verify.bind(tango)(golf);
                options = golf.intl;
                golf = options.string;
                zulu = offset[zulu];
                zulu = verify.bind(tango)(zulu);
                zulu = zulu.t;
                zulu = zulu.w4m94+;
                zulu = golf.bind(options)(zulu);
                entity['title'] = zulu;
                zulu = _closure1_slot14;
                mike = {};
                mike['navigation'] = oscar;
                oscar = _closure2_slot2;
                mike['initialRouteName'] = oscar;
                report = report.name;
                mike['routeName'] = report;
                mike = zulu.bind(tango)(mike);
                entity['headerLeft'] = mike;
                return entity;
            };
            foxtrot = 'options';
            offset[foxtrot] = romeo;
            result = function() { // Original name: getComponent
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 20;
                mike = mike[entity];
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                entity = entity.default;
                return entity;
            };
            romeo = 'getComponent';
            offset[romeo] = result;
            offset = output.bind(tango)(sizing, offset);
            report[2] = offset;
            offset = _closure1_slot8;
            options = golf.Screen;
            golf = {};
            update = golf;
            echo = kilo;
            kilo = copyDataProperties(update, echo);
            yankee = yankee.THREADS;
            golf[backup] = yankee;
            yankee = function(argFoo) { // Original name: options
                entity = argFoo;
                golf = entity.navigation;
                oscar = entity.route;
                var _closure3_slot0 = oscar;
                entity = {};
                offset = _closure1_slot0;
                yankee = _closure1_slot2;
                tango = 11;
                options = yankee[tango];
                report = undefined;
                options = offset.bind(report)(options);
                verify = options.intl;
                options = verify.string;
                tango = yankee[tango];
                tango = offset.bind(report)(tango);
                tango = tango.t;
                tango = tango.B2panJ;
                tango = options.bind(verify)(tango);
                entity['title'] = tango;
                tango = _closure1_slot14;
                zulu = {};
                zulu['navigation'] = golf;
                golf = _closure2_slot2;
                zulu['initialRouteName'] = golf;
                oscar = oscar.name;
                zulu['routeName'] = oscar;
                zulu = tango.bind(report)(zulu);
                entity['headerLeft'] = zulu;
                mike = function() { // Original name: headerRight
                    tango = _closure1_slot8;
                    zulu = _closure1_slot12;
                    mike = {};
                    entity = _closure3_slot0;
                    entity = entity.params;
                    entity = entity.channelId;
                    mike['channelId'] = entity;
                    entity = undefined;
                    entity = tango.bind(entity)(zulu, mike);
                    return entity;
                };
                entity['headerRight'] = mike;
                return entity;
            };
            golf[foxtrot] = yankee;
            yankee = function() { // Original name: getComponent
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 21;
                mike = mike[entity];
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                entity = entity.default;
                return entity;
            };
            golf[romeo] = yankee;
            golf = offset.bind(tango)(options, golf);
            report[3] = golf;
            golf = global;
            options = golf.Object;
            golf = options.entries;
            options = golf.bind(options)(verify);
            golf = options.map;
            oscar = function(argFoo) {
                _fun119715: for(var _fun119715_ip = 0; ; ) switch(_fun119715_ip) {
 0:
                    golf = argFoo;
                    entity = golf[Symbol.iterator];
                    golf = entity().next;
                    zulu = golf().value;
                    mike = entity;
                    report = undefined;
                    mike = mike === report;
                    tango = undefined;
                    if(mike) { _fun119715_ip = 29; continue _fun119715 }
 26:
                    tango = zulu;
 29:
                    var _closure3_slot0 = tango;
                    zulu = undefined;
                    if(mike) { _fun119715_ip = 63; continue _fun119715 }
 38:
                    options = golf().value;
                    golf = entity;
                    golf = golf === report;
                    zulu = undefined;
                    mike = golf;
                    if(golf) { _fun119715_ip = 63; continue _fun119715 }
 57:
                    zulu = options;
                    mike = golf;
 63:
                    var _closure3_slot1 = zulu;
                    if(mike) { _fun119715_ip = 73; continue _fun119715 }
 70:
                    entity.return();
 73:
                    zulu = _closure1_slot8;
                    entity = _closure1_slot11;
                    mike = entity.Screen;
                    entity = {};
                    entity['name'] = tango;
                    golf = function(argFoo) { // Original name: options
                        entity = argFoo;
                        report = entity.navigation;
                        entity = {};
                        zulu = _closure3_slot1;
                        zulu = zulu.title;
                        entity['title'] = zulu;
                        tango = _closure1_slot14;
                        zulu = {};
                        zulu['navigation'] = report;
                        report = _closure2_slot2;
                        zulu['initialRouteName'] = report;
                        mike = _closure3_slot0;
                        zulu['routeName'] = mike;
                        mike = undefined;
                        mike = tango.bind(mike)(zulu);
                        entity['headerLeft'] = mike;
                        return entity;
                    };
                    entity['options'] = golf;
                    oscar = function(argFoo) { // Original name: children
                        _fun119717: for(var _fun119717_ip = 0; ; ) switch(_fun119717_ip) {
 0:
                            mike = argFoo;
                            entity = mike.route;
                            tango = mike.navigation;
                            zulu = entity.params;
                            entity = null;
                            if(!(entity == zulu)) { _fun119717_ip = 34; continue _fun119717 }
 27:
                            zulu = _closure1_slot10;
 34:
                            mike = _closure3_slot1;
                            entity = mike.render;
                            entity = entity.bind(mike)(zulu, tango);
                            return entity;
                        }
                    };
                    entity['children'] = oscar;
                    entity = zulu.bind(report)(mike, entity, tango);
                    return entity;
                }
            };
            oscar = golf.bind(options)(oscar);
            report[4] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 22;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/sidebar/details/ChannelDetailsNavigator.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();