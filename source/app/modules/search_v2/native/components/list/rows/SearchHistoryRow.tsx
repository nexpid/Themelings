// app/modules/search_v2/native/components/list/rows/SearchHistoryRow.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    romeo = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeo;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: SearchHistoryRemoveIcon
        mike = argFoo;
        golf = mike.searchContext;
        var _closure2_slot0 = golf;
        oscar = mike.searchHistoryItem;
        var _closure2_slot1 = oscar;
        tango = _closure1_slot4;
        zulu = tango.useCallback;
        mike = new Array(2);
        mike[0] = golf;
        mike[1] = oscar;
        entity = function() {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 10;
            mike = mike[entity];
            entity = undefined;
            report = zulu.bind(entity)(mike);
            tango = report.removeSearchHistoryItem;
            zulu = _closure2_slot0;
            mike = _closure2_slot1;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        };
        golf = zulu.bind(tango)(entity, mike);
        tango = _closure1_slot10;
        oscar = _closure1_slot0;
        options = _closure1_slot2;
        entity = 11;
        entity = options[entity];
        zulu = undefined;
        entity = oscar.bind(zulu)(entity);
        mike = entity.PressableHighlight;
        entity = {'onPress': null, 'accessibilityRole': 'button', 'unstable_pressDelay': 130};
        entity['onPress'] = golf;
        golf = {};
        verify = 16;
        golf['marginLeft'] = verify;
        entity['style'] = golf;
        golf = {'bottom': 16, 'left': 16, 'right': 16, 'top': 16};
        entity['hitSlop'] = golf;
        golf = _closure1_slot10;
        report = 12;
        report = options[report];
        report = oscar.bind(zulu)(report);
        oscar = report.XSmallIcon;
        report = {'size': 'sm', 'color': 'interactive-normal'};
        report = golf.bind(zulu)(oscar, report);
        entity['children'] = report;
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo) { // Original name: SearchHistoryTextRow
        _fun113357: for(var _fun113357_ip = 0; ; ) switch(_fun113357_ip) {
 0:
            entity = argFoo;
            foxtrot = entity.searchContext;
            var _closure2_slot0 = foxtrot;
            romeo = entity.searchHistoryItem;
            var _closure2_slot1 = romeo;
            entity = _closure1_slot12;
            tango = undefined;
            offset = entity.bind(tango)();
            var _closure2_slot2 = offset;
            mike = _closure1_slot0;
            oscar = _closure1_slot2;
            entity = 13;
            entity = oscar[entity];
            report = mike.bind(tango)(entity);
            zulu = report.useOnPressSearchHistoryText;
            entity = {};
            entity['searchContext'] = foxtrot;
            entity = zulu.bind(report)(entity);
            var _closure2_slot3 = entity;
            golf = _closure1_slot4;
            report = golf.useCallback;
            zulu = new Array(5);
            zulu[0] = entity;
            zulu[1] = foxtrot;
            entity = romeo.tags;
            zulu[2] = entity;
            entity = romeo.text;
            zulu[3] = entity;
            entity = romeo.type;
            zulu[4] = entity;
            entity = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 14;
                mike = mike[entity];
                entity = undefined;
                oscar = zulu.bind(entity)(mike);
                report = oscar.trackSearchHistoryClicked;
                tango = {};
                mike = _closure2_slot0;
                tango['searchContext'] = mike;
                mike = _closure2_slot1;
                golf = mike.type;
                tango['searchHistoryItemType'] = golf;
                tango = report.bind(oscar)(tango);
                tango = _closure2_slot3;
                zulu = mike.text;
                mike = mike.tags;
                mike = tango.bind(entity)(zulu, mike);
                return entity;
            };
            report = report.bind(golf)(entity, zulu);
            zulu = _closure1_slot10;
            entity = 15;
            entity = oscar[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.SearchListRow;
            entity = {};
            backup = _closure1_slot11;
            golf = _closure1_slot5;
            oscar = {};
            verify = offset.textContainer;
            oscar['style'] = verify;
            sizing = romeo.tags;
            verify = null;
            kilo = verify == sizing;
            verify = undefined;
            if(kilo) { _fun113357_ip = 224; continue _fun113357 }
 207:
            kilo = sizing.map;
            yankee = function(argFoo) {
                entity = argFoo;
                report = _closure1_slot10;
                tango = _closure1_slot5;
                zulu = {};
                oscar = 'button';
                zulu['accessibilityRole'] = oscar;
                oscar = _closure2_slot2;
                oscar = oscar.tag;
                zulu['style'] = oscar;
                options = _closure1_slot10;
                golf = _closure1_slot0;
                oscar = _closure1_slot2;
                mike = 16;
                oscar = oscar[mike];
                mike = undefined;
                oscar = golf.bind(mike)(oscar);
                golf = oscar.Text;
                oscar = {'lineClamp': 1, 'variant': 'text-sm/semibold', 'color': 'header-primary'};
                verify = entity.text;
                oscar['children'] = verify;
                oscar = options.bind(mike)(golf, oscar);
                zulu['children'] = oscar;
                entity = entity.text;
                entity = report.bind(mike)(tango, zulu, entity);
                return entity;
            };
            verify = kilo.bind(sizing)(yankee);
 224:
            kilo = new Array(2);
            kilo[0] = verify;
            result = _closure1_slot10;
            verify = _closure1_slot0;
            yankee = _closure1_slot2;
            sizing = 16;
            sizing = yankee[sizing];
            sizing = verify.bind(tango)(sizing);
            output = sizing.Text;
            sizing = {'lineClamp': 1, 'variant': 'text-md/semibold', 'color': 'header-primary'};
            echo = offset.text;
            sizing['style'] = echo;
            echo = romeo.text;
            sizing['children'] = echo;
            sizing = result.bind(tango)(output, sizing);
            kilo[1] = sizing;
            oscar['children'] = kilo;
            oscar = backup.bind(tango)(golf, oscar);
            entity['label'] = oscar;
            entity['onPress'] = report;
            golf = _closure1_slot10;
            oscar = _closure1_slot14;
            report = {};
            report['searchContext'] = foxtrot;
            report['searchHistoryItem'] = romeo;
            report = golf.bind(tango)(oscar, report);
            entity['trailing'] = report;
            report = offset.textIconContainer;
            entity['iconContainerStyle'] = report;
            golf = _closure1_slot10;
            oscar = _closure1_slot5;
            report = {};
            offset = offset.iconContainer;
            report['style'] = offset;
            offset = _closure1_slot10;
            options = 17;
            options = yankee[options];
            options = verify.bind(tango)(options);
            verify = options.MagnifyingGlassIcon;
            options = {'size': 'sm', 'color': 'interactive-normal'};
            options = offset.bind(tango)(verify, options);
            report['children'] = options;
            report = golf.bind(tango)(oscar, report);
            entity['icon'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo) { // Original name: SearchHistoryGroupDMRow
        _fun113360: for(var _fun113360_ip = 0; ; ) switch(_fun113360_ip) {
 0:
            mike = argFoo;
            tango = mike.searchContext;
            var _closure2_slot0 = tango;
            zulu = mike.searchHistoryItem;
            var _closure2_slot1 = zulu;
            golf = _closure1_slot0;
            options = _closure1_slot2;
            report = 18;
            oscar = options[report];
            report = undefined;
            yankee = golf.bind(report)(oscar);
            offset = yankee.useStateFromStores;
            oscar = _closure1_slot6;
            verify = new Array(1);
            verify[0] = oscar;
            oscar = function() {
                zulu = _closure1_slot6;
                mike = zulu.getChannel;
                entity = _closure2_slot1;
                entity = entity.channelId;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            offset = offset.bind(yankee)(verify, oscar);
            var _closure2_slot2 = offset;
            romeo = _closure1_slot4;
            yankee = romeo.useEffect;
            verify = new Array(3);
            verify[0] = offset;
            verify[1] = tango;
            verify[2] = zulu;
            oscar = function() {
                _fun113362: for(var _fun113362_ip = 0; ; ) switch(_fun113362_ip) {
 0:
                    zulu = _closure2_slot2;
                    mike = null;
                    if(!(mike == zulu)) { _fun113362_ip = 58; continue _fun113362 }
 13:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 10;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.removeSearchHistoryItem;
                    mike = _closure2_slot0;
                    entity = _closure2_slot1;
                    entity = zulu.bind(tango)(mike, entity);
 58:
                    entity = undefined;
                    return entity;
                }
            };
            oscar = yankee.bind(romeo)(oscar, verify);
            oscar = 13;
            oscar = options[oscar];
            options = golf.bind(report)(oscar);
            golf = options.useOnPressGroupDMItem;
            oscar = {};
            oscar['searchContext'] = tango;
            verify = golf.bind(options)(oscar);
            var _closure2_slot3 = verify;
            options = _closure1_slot4;
            golf = options.useCallback;
            oscar = new Array(3);
            oscar[0] = verify;
            oscar[1] = tango;
            verify = zulu.type;
            oscar[2] = verify;
            entity = function(argFoo) {
                zulu = argFoo;
                tango = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 14;
                mike = mike[entity];
                entity = undefined;
                oscar = tango.bind(entity)(mike);
                report = oscar.trackSearchHistoryClicked;
                tango = {};
                golf = _closure2_slot0;
                tango['searchContext'] = golf;
                tango['channelId'] = zulu;
                golf = _closure2_slot1;
                golf = golf.type;
                tango['searchHistoryItemType'] = golf;
                tango = report.bind(oscar)(tango);
                mike = _closure2_slot3;
                mike = mike.bind(entity)(zulu);
                return entity;
            };
            verify = golf.bind(options)(entity, oscar);
            entity = _closure1_slot20;
            entity = entity.bind(report)(tango, zulu);
            oscar = entity.trailing;
            options = entity.accessibilityActions;
            golf = entity.onAccessibilityAction;
            entity = null;
            zulu = entity == offset;
            if(zulu) { _fun113360_ip = 291; continue _fun113360 }
 236:
            tango = _closure1_slot10;
            zulu = _closure1_slot1;
            yankee = _closure1_slot2;
            mike = 19;
            mike = yankee[mike];
            zulu = zulu.bind(report)(mike);
            mike = {};
            mike['channel'] = offset;
            mike['onPress'] = verify;
            mike['accessibilityActions'] = options;
            mike['onAccessibilityAction'] = golf;
            mike['trailing'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 291:
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: SearchHistoryDMRow
        _fun113364: for(var _fun113364_ip = 0; ; ) switch(_fun113364_ip) {
 0:
            mike = argFoo;
            tango = mike.searchContext;
            var _closure2_slot0 = tango;
            zulu = mike.searchHistoryItem;
            var _closure2_slot1 = zulu;
            golf = _closure1_slot0;
            options = _closure1_slot2;
            report = 18;
            oscar = options[report];
            report = undefined;
            yankee = golf.bind(report)(oscar);
            offset = yankee.useStateFromStores;
            oscar = _closure1_slot8;
            verify = new Array(1);
            verify[0] = oscar;
            oscar = function() {
                zulu = _closure1_slot8;
                mike = zulu.getUser;
                entity = _closure2_slot1;
                entity = entity.userId;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            offset = offset.bind(yankee)(verify, oscar);
            romeo = _closure1_slot4;
            yankee = romeo.useEffect;
            oscar = zulu.userId;
            verify = new Array(1);
            verify[0] = oscar;
            oscar = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 20;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.getUser;
                mike = _closure2_slot1;
                mike = mike.userId;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            oscar = yankee.bind(romeo)(oscar, verify);
            oscar = 13;
            oscar = options[oscar];
            options = golf.bind(report)(oscar);
            golf = options.useOnPressDMItem;
            oscar = {};
            oscar['searchContext'] = tango;
            verify = golf.bind(options)(oscar);
            var _closure2_slot2 = verify;
            options = _closure1_slot4;
            golf = options.useCallback;
            entity = function() {
                tango = _closure1_slot3;
                zulu = undefined;
                mike = function* (argFoo) {
                    entity = function* (argFoo) { // Original name: ?anon_0_
                        _fun113369: for(var _fun113369_ip = 0; ; ) switch(_fun113369_ip) {
 0:
                            StartGenerator();
                            report = argFoo;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(mike) { _fun113369_ip = 138; continue _fun113369 }
 13:
                            oscar = _closure1_slot1;
                            zulu = _closure1_slot2;
                            mike = 21;
                            mike = zulu[mike];
                            zulu = undefined;
                            oscar = oscar.bind(zulu)(mike);
                            mike = oscar.getOrEnsurePrivateChannel;
                            mike = mike.bind(oscar)(report);
                            SaveGenerator(address=53);
 51:
                            return mike;
 53:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                            if(oscar) { _fun113369_ip = 135; continue _fun113369 }
 59:
                            oscar = _closure1_slot0;
                            golf = _closure1_slot2;
                            tango = 14;
                            tango = golf[tango];
                            options = oscar.bind(zulu)(tango);
                            golf = options.trackSearchHistoryClicked;
                            oscar = {};
                            verify = _closure2_slot0;
                            oscar['searchContext'] = verify;
                            oscar['channelId'] = mike;
                            verify = _closure2_slot1;
                            verify = verify.type;
                            oscar['searchHistoryItemType'] = verify;
                            oscar = golf.bind(options)(oscar);
                            tango = _closure2_slot2;
                            tango = tango.bind(zulu)(report, mike);
                            return zulu;
 135:
                            return mike;
 138:
                            return entity;
                        }
                    };
                    return entity;
                };
                mike = tango.bind(zulu)(mike);
                var _closure3_slot0 = mike;
                entity = function() {
                    entity = undefined;
                    tango = _closure3_slot0;
                    zulu = tango.apply;
                    entity = arguments;
                    mike = entity;
                    entity = this;
                    entity = zulu.bind(tango)(entity, mike);
                    return entity;
                };
                return entity;
            };
            oscar = entity.bind(report)();
            entity = new Array(3);
            entity[0] = verify;
            entity[1] = tango;
            verify = zulu.type;
            entity[2] = verify;
            verify = golf.bind(options)(oscar, entity);
            entity = _closure1_slot20;
            entity = entity.bind(report)(tango, zulu);
            oscar = entity.trailing;
            options = entity.accessibilityActions;
            golf = entity.onAccessibilityAction;
            entity = null;
            zulu = entity == offset;
            if(zulu) { _fun113364_ip = 288; continue _fun113364 }
 233:
            tango = _closure1_slot10;
            zulu = _closure1_slot1;
            yankee = _closure1_slot2;
            mike = 22;
            mike = yankee[mike];
            zulu = zulu.bind(report)(mike);
            mike = {};
            mike['user'] = offset;
            mike['onPress'] = verify;
            mike['accessibilityActions'] = options;
            mike['onAccessibilityAction'] = golf;
            mike['trailing'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 288:
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo) { // Original name: SearchHistoryGuildVoiceChannelRow
        _fun113371: for(var _fun113371_ip = 0; ; ) switch(_fun113371_ip) {
 0:
            mike = argFoo;
            yankee = mike.searchContext;
            var _closure2_slot0 = yankee;
            offset = mike.searchHistoryItem;
            var _closure2_slot1 = offset;
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 18;
            mike = tango[mike];
            report = undefined;
            verify = zulu.bind(report)(mike);
            options = verify.useStateFromStores;
            mike = _closure1_slot6;
            oscar = new Array(1);
            oscar[0] = mike;
            mike = function() {
                zulu = _closure1_slot6;
                mike = zulu.getChannel;
                entity = _closure2_slot1;
                entity = entity.channelId;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            options = options.bind(verify)(oscar, mike);
            var _closure2_slot2 = options;
            romeo = _closure1_slot4;
            verify = romeo.useEffect;
            oscar = new Array(3);
            oscar[0] = options;
            oscar[1] = yankee;
            oscar[2] = offset;
            mike = function() {
                _fun113373: for(var _fun113373_ip = 0; ; ) switch(_fun113373_ip) {
 0:
                    zulu = _closure2_slot2;
                    mike = null;
                    if(!(mike == zulu)) { _fun113373_ip = 58; continue _fun113373 }
 13:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 10;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.removeSearchHistoryItem;
                    mike = _closure2_slot0;
                    entity = _closure2_slot1;
                    entity = zulu.bind(tango)(mike, entity);
 58:
                    entity = undefined;
                    return entity;
                }
            };
            mike = verify.bind(romeo)(mike, oscar);
            mike = 13;
            mike = tango[mike];
            tango = zulu.bind(report)(mike);
            zulu = tango.useOnPressGuildVoiceChannel;
            mike = {};
            mike['searchContext'] = yankee;
            oscar = zulu.bind(tango)(mike);
            var _closure2_slot3 = oscar;
            tango = _closure1_slot4;
            zulu = tango.useCallback;
            mike = new Array(3);
            mike[0] = oscar;
            mike[1] = yankee;
            oscar = offset.type;
            mike[2] = oscar;
            entity = function(argFoo) {
                zulu = argFoo;
                tango = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 14;
                mike = mike[entity];
                entity = undefined;
                oscar = tango.bind(entity)(mike);
                report = oscar.trackSearchHistoryClicked;
                tango = {};
                golf = _closure2_slot0;
                tango['searchContext'] = golf;
                tango['channelId'] = zulu;
                golf = _closure2_slot1;
                golf = golf.type;
                tango['searchHistoryItemType'] = golf;
                tango = report.bind(oscar)(tango);
                mike = _closure2_slot3;
                mike = mike.bind(entity)(zulu);
                return entity;
            };
            oscar = zulu.bind(tango)(entity, mike);
            entity = null;
            mike = entity == options;
            if(mike) { _fun113371_ip = 297; continue _fun113371 }
 208:
            tango = _closure1_slot10;
            zulu = _closure1_slot1;
            verify = _closure1_slot2;
            mike = 23;
            mike = verify[mike];
            zulu = zulu.bind(report)(mike);
            mike = {};
            mike['channel'] = options;
            options = _closure1_slot13;
            mike['voiceStates'] = options;
            options = _closure1_slot13;
            mike['speakerVoiceStates'] = options;
            verify = _closure1_slot10;
            options = _closure1_slot14;
            golf = {};
            golf['searchContext'] = yankee;
            golf['searchHistoryItem'] = offset;
            golf = verify.bind(report)(options, golf);
            mike['trailing'] = golf;
            mike['onPress'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 297:
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo) { // Original name: SearchHistoryGuildTextChannelRow
        _fun113375: for(var _fun113375_ip = 0; ; ) switch(_fun113375_ip) {
 0:
            mike = argFoo;
            tango = mike.searchContext;
            var _closure2_slot0 = tango;
            zulu = mike.searchHistoryItem;
            var _closure2_slot1 = zulu;
            golf = _closure1_slot0;
            options = _closure1_slot2;
            oscar = 18;
            verify = options[oscar];
            report = undefined;
            romeo = golf.bind(report)(verify);
            yankee = romeo.useStateFromStores;
            verify = _closure1_slot6;
            offset = new Array(1);
            offset[0] = verify;
            verify = function() {
                zulu = _closure1_slot6;
                mike = zulu.getChannel;
                entity = _closure2_slot1;
                entity = entity.channelId;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            yankee = yankee.bind(romeo)(offset, verify);
            var _closure2_slot2 = yankee;
            foxtrot = _closure1_slot4;
            romeo = foxtrot.useEffect;
            offset = new Array(3);
            offset[0] = yankee;
            offset[1] = tango;
            offset[2] = zulu;
            verify = function() {
                _fun113377: for(var _fun113377_ip = 0; ; ) switch(_fun113377_ip) {
 0:
                    zulu = _closure2_slot2;
                    mike = null;
                    if(!(mike == zulu)) { _fun113377_ip = 58; continue _fun113377 }
 13:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 10;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.removeSearchHistoryItem;
                    mike = _closure2_slot0;
                    entity = _closure2_slot1;
                    entity = zulu.bind(tango)(mike, entity);
 58:
                    entity = undefined;
                    return entity;
                }
            };
            verify = romeo.bind(foxtrot)(verify, offset);
            oscar = options[oscar];
            romeo = golf.bind(report)(oscar);
            offset = romeo.useStateFromStores;
            oscar = _closure1_slot7;
            verify = new Array(1);
            verify[0] = oscar;
            oscar = function() {
                _fun113378: for(var _fun113378_ip = 0; ; ) switch(_fun113378_ip) {
 0:
                    zulu = _closure1_slot7;
                    mike = zulu.lastMessageId;
                    entity = _closure2_slot1;
                    entity = entity.channelId;
                    mike = mike.bind(zulu)(entity);
                    entity = null;
                    if(!(entity == mike)) { _fun113378_ip = 62; continue _fun113378 }
 36:
                    zulu = _closure2_slot2;
                    report = entity == zulu;
                    zulu = undefined;
                    if(report) { _fun113378_ip = 59; continue _fun113378 }
 49:
                    tango = _closure2_slot2;
                    zulu = tango.lastMessageId;
 59:
                    mike = zulu;
 62:
                    zulu = entity != mike;
                    entity = null;
                    if(!zulu) { _fun113378_ip = 74; continue _fun113378 }
 71:
                    entity = mike;
 74:
                    return entity;
                }
            };
            offset = offset.bind(romeo)(verify, oscar);
            oscar = 13;
            oscar = options[oscar];
            options = golf.bind(report)(oscar);
            golf = options.useOnPressGuildTextChannel;
            oscar = {};
            oscar['searchContext'] = tango;
            verify = golf.bind(options)(oscar);
            var _closure2_slot3 = verify;
            options = _closure1_slot4;
            golf = options.useCallback;
            oscar = new Array(3);
            oscar[0] = verify;
            oscar[1] = tango;
            verify = zulu.type;
            oscar[2] = verify;
            entity = function(argFoo) {
                zulu = argFoo;
                tango = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 14;
                mike = mike[entity];
                entity = undefined;
                oscar = tango.bind(entity)(mike);
                report = oscar.trackSearchHistoryClicked;
                tango = {};
                golf = _closure2_slot0;
                tango['searchContext'] = golf;
                tango['channelId'] = zulu;
                golf = _closure2_slot1;
                golf = golf.type;
                tango['searchHistoryItemType'] = golf;
                tango = report.bind(oscar)(tango);
                mike = _closure2_slot3;
                mike = mike.bind(entity)(zulu);
                return entity;
            };
            verify = golf.bind(options)(entity, oscar);
            entity = _closure1_slot20;
            entity = entity.bind(report)(tango, zulu);
            oscar = entity.trailing;
            options = entity.accessibilityActions;
            golf = entity.onAccessibilityAction;
            entity = null;
            zulu = entity == yankee;
            if(zulu) { _fun113375_ip = 335; continue _fun113375 }
 275:
            tango = _closure1_slot10;
            zulu = _closure1_slot1;
            romeo = _closure1_slot2;
            mike = 24;
            mike = romeo[mike];
            zulu = zulu.bind(report)(mike);
            mike = {};
            mike['channel'] = yankee;
            mike['lastMessageId'] = offset;
            mike['onPress'] = verify;
            mike['accessibilityActions'] = options;
            mike['onAccessibilityAction'] = golf;
            mike['trailing'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 335:
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function(argFoo, argBar) { // Original name: useClearableSearchHistoryRowProps
        oscar = argFoo;
        mike = argBar;
        var _closure2_slot0 = oscar;
        var _closure2_slot1 = mike;
        entity = {};
        verify = _closure1_slot4;
        options = verify.useMemo;
        golf = function() {
            mike = {};
            entity = 'remove';
            mike['name'] = entity;
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            entity = 25;
            zulu = golf[entity];
            report = undefined;
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            entity = golf[entity];
            entity = oscar.bind(report)(entity);
            entity = entity.t;
            entity = entity.Ov3VOz;
            entity = zulu.bind(tango)(entity);
            mike['label'] = entity;
            entity = new Array(1);
            entity[0] = mike;
            return entity;
        };
        report = new Array(0);
        report = options.bind(verify)(golf, report);
        entity['accessibilityActions'] = report;
        options = _closure1_slot4;
        golf = options.useCallback;
        report = new Array(2);
        report[0] = oscar;
        report[1] = mike;
        tango = function(argFoo) {
            _fun113382: for(var _fun113382_ip = 0; ; ) switch(_fun113382_ip) {
 0:
                entity = argFoo;
                entity = entity.nativeEvent;
                mike = entity.actionName;
                entity = 'remove';
                if(!(entity === mike)) { _fun113382_ip = 70; continue _fun113382 }
 22:
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 10;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.removeSearchHistoryItem;
                mike = _closure2_slot0;
                entity = _closure2_slot1;
                entity = zulu.bind(tango)(mike, entity);
 70:
                entity = undefined;
                return entity;
            }
        };
        tango = golf.bind(options)(tango, report);
        entity['onAccessibilityAction'] = tango;
        report = _closure1_slot10;
        tango = _closure1_slot14;
        zulu = {};
        zulu['searchContext'] = oscar;
        zulu['searchHistoryItem'] = mike;
        mike = undefined;
        mike = report.bind(mike)(tango, zulu);
        entity['trailing'] = mike;
        return entity;
    };
    var _closure1_slot20 = entity;
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
    foxtrot = 1;
    golf = oscar[foxtrot];
    tango = argCorge;
    golf = tango.bind(entity)(golf);
    var _closure1_slot4 = golf;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.SearchHistoryItemTypes;
    var _closure1_slot9 = tango;
    tango = 7;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot10 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot11 = tango;
    tango = 8;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    tango = {};
    offset = {'height': 48, 'width': 48, 'borderRadius': null, 'backgroundColor': null, 'alignItems': 'center', 'justifyContent': 'center'};
    yankee = 9;
    backup = oscar[yankee];
    backup = romeo.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.xl;
    offset['borderRadius'] = backup;
    backup = oscar[yankee];
    backup = romeo.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.INPUT_BACKGROUND;
    offset['backgroundColor'] = backup;
    tango['iconContainer'] = offset;
    offset = {};
    offset['flexShrink'] = foxtrot;
    tango['text'] = offset;
    offset = {'flexDirection': 'row', 'alignItems': 'center', 'flexWrap': 'wrap', 'gap': 2};
    tango['textContainer'] = offset;
    offset = {};
    foxtrot = 'flex-start';
    offset['alignSelf'] = foxtrot;
    tango['textIconContainer'] = offset;
    offset = {'paddingHorizontal': 8, 'paddingVertical': 4, 'borderRadius': null, 'overflow': 'hidden', 'margin': 2, 'flexDirection': 'row', 'alignItems': 'center'};
    foxtrot = oscar[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.radii;
    foxtrot = foxtrot.lg;
    offset['borderRadius'] = foxtrot;
    yankee = oscar[yankee];
    yankee = romeo.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.BG_BASE_TERTIARY;
    offset['backgroundColor'] = yankee;
    tango['tag'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot12 = tango;
    tango = new Array(0);
    var _closure1_slot13 = tango;
    tango = golf.memo;
    mike = function(argFoo) {
        _fun113383: for(var _fun113383_ip = 0; ; ) switch(_fun113383_ip) {
 0:
            tango = argFoo;
            report = tango.searchHistoryItem;
            zulu = null;
            mike = Object.create(zulu);
            entity = 0;
            mike['searchHistoryItem'] = entity;
            offset = {};
            verify = tango;
            options = mike;
            entity = copyDataProperties(offset, verify, options);
            oscar = report.type;
            tango = _closure1_slot9;
            tango = tango.GROUP_DM;
            if(!(tango !== oscar)) { _fun113383_ip = 275; continue _fun113383 }
 58:
            tango = _closure1_slot9;
            tango = tango.DM;
            if(!(tango !== oscar)) { _fun113383_ip = 236; continue _fun113383 }
 75:
            tango = _closure1_slot9;
            tango = tango.TEXT;
            if(!(tango !== oscar)) { _fun113383_ip = 197; continue _fun113383 }
 89:
            tango = _closure1_slot9;
            tango = tango.GUILD_TEXT_CHANNEL;
            if(!(tango !== oscar)) { _fun113383_ip = 158; continue _fun113383 }
 103:
            tango = _closure1_slot9;
            tango = tango.GUILD_VOICE_CHANNEL;
            if(!(tango !== oscar)) { _fun113383_ip = 119; continue _fun113383 }
 117:
            return zulu;
 119:
            golf = _closure1_slot10;
            oscar = _closure1_slot18;
            tango = {};
            offset = tango;
            verify = entity;
            zulu = copyDataProperties(offset, verify);
            zulu = 'searchHistoryItem';
            tango[zulu] = report;
            zulu = undefined;
            zulu = golf.bind(zulu)(oscar, tango);
            return zulu;
 158:
            golf = _closure1_slot10;
            oscar = _closure1_slot19;
            tango = {};
            offset = tango;
            verify = entity;
            zulu = copyDataProperties(offset, verify);
            zulu = 'searchHistoryItem';
            tango[zulu] = report;
            zulu = undefined;
            zulu = golf.bind(zulu)(oscar, tango);
            return zulu;
 197:
            golf = _closure1_slot10;
            oscar = _closure1_slot15;
            tango = {};
            offset = tango;
            verify = entity;
            zulu = copyDataProperties(offset, verify);
            zulu = 'searchHistoryItem';
            tango[zulu] = report;
            zulu = undefined;
            zulu = golf.bind(zulu)(oscar, tango);
            return zulu;
 236:
            golf = _closure1_slot10;
            oscar = _closure1_slot17;
            tango = {};
            offset = tango;
            verify = entity;
            zulu = copyDataProperties(offset, verify);
            zulu = 'searchHistoryItem';
            tango[zulu] = report;
            zulu = undefined;
            zulu = golf.bind(zulu)(oscar, tango);
            return zulu;
 275:
            tango = _closure1_slot10;
            zulu = _closure1_slot16;
            mike = {};
            offset = mike;
            verify = entity;
            entity = copyDataProperties(offset, verify);
            entity = 'searchHistoryItem';
            mike[entity] = report;
            entity = undefined;
            entity = tango.bind(entity)(zulu, mike);
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 26;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/search_v2/native/components/list/rows/SearchHistoryRow.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();