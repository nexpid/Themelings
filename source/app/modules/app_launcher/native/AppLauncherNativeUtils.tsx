// app/modules/app_launcher/native/AppLauncherNativeUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    options = argCorge;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = options;
    var _closure1_slot3 = oscar;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = options.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.APP_LAUNCHER_BUILT_IN_SECTION_ICON;
    var _closure1_slot7 = golf;
    tango = tango.AppLauncherRouteName;
    var _closure1_slot8 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.AnalyticEvents;
    var _closure1_slot9 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.BuiltInSectionId;
    var _closure1_slot10 = tango;
    tango = 20;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/app_launcher/native/AppLauncherNativeUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: handleApplicationSelected
        _fun118456: for(var _fun118456_ip = 0; ; ) switch(_fun118456_ip) {
 0:
            mike = argFoo;
            sizing = mike.location;
            offset = mike.application;
            report = mike.navigation;
            verify = mike.channelId;
            golf = mike.sectionName;
            options = mike.installOnDemand;
            kilo = mike.query;
            backup = mike.searchResultsPosition;
            zulu = mike.navigates;
            entity = undefined;
            if(!(zulu === entity)) { _fun118456_ip = 61; continue _fun118456 }
 59:
            zulu = true;
 61:
            oscar = mike.entrypoint;
            yankee = _closure1_slot0;
            romeo = _closure1_slot3;
            tango = 6;
            tango = romeo[tango];
            foxtrot = yankee.bind(entity)(tango);
            romeo = foxtrot.trackWithMetadata;
            tango = _closure1_slot9;
            yankee = tango.APPLICATION_COMMAND_SECTION_SELECTED;
            tango = {};
            tango['location'] = sizing;
            output = offset.id;
            sizing = _closure1_slot10;
            sizing = sizing.BUILT_IN;
            if(!(output !== sizing)) { _fun118456_ip = 165; continue _fun118456 }
 131:
            output = _closure1_slot0;
            result = _closure1_slot3;
            sizing = 7;
            sizing = result[sizing];
            sizing = output.bind(entity)(sizing);
            sizing = sizing.ApplicationCommandTriggerSections;
            sizing = sizing.APP;
            _fun118456_ip = 197; continue _fun118456;
 165:
            result = _closure1_slot0;
            echo = _closure1_slot3;
            output = 7;
            output = echo[output];
            output = result.bind(entity)(output);
            output = output.ApplicationCommandTriggerSections;
            sizing = output.BUILT_IN;
 197:
            tango['section'] = sizing;
            output = offset.id;
            sizing = null;
            result = sizing != output;
            if(!result) { _fun118456_ip = 218; continue _fun118456 }
 215:
            sizing = output;
 218:
            tango['application_id'] = sizing;
            tango['section_name'] = golf;
            tango['query'] = kilo;
            tango['search_results_position'] = backup;
            tango['source'] = oscar;
            tango = romeo.bind(foxtrot)(yankee, tango);
            if(!zulu) { _fun118456_ip = 297; continue _fun118456 }
 250:
            tango = report.navigate;
            mike = _closure1_slot8;
            zulu = mike.APPLICATION_VIEW;
            mike = {};
            mike['application'] = offset;
            mike['channelId'] = verify;
            mike['installOnDemand'] = options;
            mike['sectionName'] = golf;
            mike['entrypoint'] = oscar;
            mike = tango.bind(report)(zulu, mike);
 297:
            return entity;
        }
    };
    zulu['handleApplicationSelected'] = tango;
    tango = function(argFoo) { // Original name: handleViewAllSelected
        _fun118457: for(var _fun118457_ip = 0; ; ) switch(_fun118457_ip) {
 0:
            entity = argFoo;
            kilo = entity.location;
            report = entity.navigation;
            backup = entity.channelId;
            foxtrot = entity.sectionName;
            romeo = entity.sectionOverallPosition;
            yankee = entity.applications;
            offset = entity.sectionItemType;
            verify = entity.commands;
            options = entity.sectionDescriptors;
            golf = entity.title;
            oscar = entity.promotedApplicationIds;
            echo = _closure1_slot0;
            update = _closure1_slot3;
            entity = 6;
            zulu = update[entity];
            entity = undefined;
            output = echo.bind(entity)(zulu);
            sizing = output.trackWithMetadata;
            zulu = _closure1_slot9;
            tango = zulu.APP_LAUNCHER_SECTION_VIEW_MORE;
            zulu = {};
            zulu['section_name'] = foxtrot;
            result = 8;
            result = update[result];
            result = echo.bind(entity)(result);
            result = result.SectionItemType;
            result = result.APPS;
            if(!(offset !== result)) { _fun118457_ip = 149; continue _fun118457 }
 142:
            result = verify.length;
            _fun118457_ip = 154; continue _fun118457;
 149:
            result = yankee.length;
 154:
            zulu['num'] = result;
            zulu = sizing.bind(output)(tango, zulu);
            tango = report.navigate;
            mike = _closure1_slot8;
            zulu = mike.APP_LIST_VIEW;
            mike = {};
            mike['analyticsLocation'] = kilo;
            mike['channelId'] = backup;
            mike['sectionName'] = foxtrot;
            mike['sectionOverallPosition'] = romeo;
            mike['applications'] = yankee;
            mike['sectionItemType'] = offset;
            mike['commands'] = verify;
            mike['sectionDescriptors'] = options;
            mike['title'] = golf;
            mike['promotedApplicationIds'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        }
    };
    zulu['handleViewAllSelected'] = tango;
    tango = function(argFoo) { // Original name: handleApplicationCommandSelected
        _fun118458: for(var _fun118458_ip = 0; ; ) switch(_fun118458_ip) {
 0:
            entity = argFoo;
            foxtrot = entity.location;
            verify = entity.channel;
            kilo = entity.command;
            var _closure2_slot0 = kilo;
            offset = entity.section;
            yankee = entity.sectionDescriptors;
            update = entity.query;
            report = entity.navigation;
            options = entity.installOnDemand;
            golf = entity.sectionName;
            echo = entity.searchResultsPosition;
            oscar = entity.entrypoint;
            romeo = entity.onCommandExecuted;
            sizing = _closure1_slot0;
            output = _closure1_slot3;
            source = 9;
            tango = output[source];
            entity = undefined;
            result = sizing.bind(entity)(tango);
            backup = result.trackCommandSelected;
            tango = {};
            tango['command'] = kilo;
            tango['location'] = foxtrot;
            source = output[source];
            control = sizing.bind(entity)(source);
            source = control.getCommandTriggerSection;
            source = source.bind(control)(offset);
            tango['triggerSection'] = source;
            source = update.length;
            tango['queryLength'] = source;
            tango['sectionName'] = golf;
            tango['query'] = update;
            tango['searchResultsPosition'] = echo;
            tango['source'] = oscar;
            tango = backup.bind(result)(tango);
            backup = kilo.type;
            tango = 10;
            tango = output[tango];
            tango = sizing.bind(entity)(tango);
            tango = tango.ApplicationCommandType;
            tango = tango.PRIMARY_ENTRY_POINT;
            if(!(backup !== tango)) { _fun118458_ip = 365; continue _fun118458 }
 213:
            sizing = offset.id;
            tango = _closure1_slot10;
            tango = tango.FRECENCY;
            backup = offset;
            if(!(sizing === tango)) { _fun118458_ip = 264; continue _fun118458 }
 235:
            tango = yankee.find;
            zulu = function(argFoo) {
                entity = argFoo;
                mike = entity.id;
                entity = _closure2_slot0;
                entity = entity.applicationId;
                entity = mike === entity;
                return entity;
            };
            zulu = tango.bind(yankee)(zulu);
            tango = null;
            backup = offset;
            if(!(tango != zulu)) { _fun118458_ip = 264; continue _fun118458 }
 261:
            backup = zulu;
 264:
            tango = _closure1_slot2;
            yankee = _closure1_slot3;
            zulu = 11;
            zulu = yankee[zulu];
            yankee = tango.bind(entity)(zulu);
            tango = yankee.setAppLauncherActiveCommand;
            zulu = verify.id;
            zulu = tango.bind(yankee)(zulu, kilo);
            yankee = report.navigate;
            zulu = _closure1_slot8;
            tango = zulu.COMMAND_VIEW;
            zulu = {};
            zulu['command'] = kilo;
            zulu['section'] = backup;
            backup = verify.id;
            zulu['channelId'] = backup;
            zulu['installOnDemand'] = options;
            zulu['sectionName'] = golf;
            zulu['analyticsLocation'] = foxtrot;
            zulu['onCommandExecuted'] = romeo;
            zulu = yankee.bind(report)(tango, zulu);
            _fun118458_ip = 422; continue _fun118458;
 365:
            tango = report.navigate;
            mike = _closure1_slot8;
            zulu = mike.APPLICATION_VIEW;
            mike = {};
            offset = offset.application;
            mike['application'] = offset;
            verify = verify.id;
            mike['channelId'] = verify;
            mike['installOnDemand'] = options;
            mike['sectionName'] = golf;
            mike['entrypoint'] = oscar;
            mike = tango.bind(report)(zulu, mike);
 422:
            return entity;
        }
    };
    zulu['handleApplicationCommandSelected'] = tango;
    tango = function(argFoo) {
        _fun118460: for(var _fun118460_ip = 0; ; ) switch(_fun118460_ip) {
 0:
            entity = argFoo;
            oscar = entity.option;
            var _closure2_slot0 = oscar;
            offset = entity.prefilledValues;
            verify = entity.guildId;
            options = entity.roles;
            report = undefined;
            var _closure2_slot1 = report;
            entity = null;
            tango = entity == offset;
            mike = undefined;
            if(tango) { _fun118460_ip = 66; continue _fun118460 }
 49:
            golf = offset.find;
            tango = function(argFoo) {
                _fun118461: for(var _fun118461_ip = 0; ; ) switch(_fun118461_ip) {
 0:
                    zulu = argFoo;
                    tango = zulu.name;
                    entity = _closure2_slot0;
                    entity = entity.name;
                    entity = tango === entity;
                    if(!entity) { _fun118461_ip = 45; continue _fun118461 }
 27:
                    zulu = zulu.type;
                    mike = _closure2_slot0;
                    mike = mike.type;
                    entity = zulu === mike;
 45:
                    return entity;
                }
            };
            mike = golf.bind(offset)(tango);
 66:
            _closure2_slot1 = mike;
            offset = oscar.type;
            yankee = _closure1_slot0;
            golf = _closure1_slot3;
            romeo = 10;
            golf = golf[romeo];
            golf = yankee.bind(report)(golf);
            golf = golf.ApplicationCommandOptionType;
            golf = golf.BOOLEAN;
            if(!(golf !== offset)) { _fun118460_ip = 1056; continue _fun118460 }
 117:
            yankee = _closure1_slot0;
            golf = _closure1_slot3;
            golf = golf[romeo];
            golf = yankee.bind(report)(golf);
            golf = golf.ApplicationCommandOptionType;
            golf = golf.STRING;
            if(!(golf !== offset)) { _fun118460_ip = 897; continue _fun118460 }
 153:
            yankee = _closure1_slot0;
            golf = _closure1_slot3;
            golf = golf[romeo];
            golf = yankee.bind(report)(golf);
            golf = golf.ApplicationCommandOptionType;
            golf = golf.INTEGER;
            if(!(golf !== offset)) { _fun118460_ip = 897; continue _fun118460 }
 189:
            yankee = _closure1_slot0;
            golf = _closure1_slot3;
            golf = golf[romeo];
            golf = yankee.bind(report)(golf);
            golf = golf.ApplicationCommandOptionType;
            golf = golf.NUMBER;
            if(!(golf !== offset)) { _fun118460_ip = 897; continue _fun118460 }
 225:
            yankee = _closure1_slot0;
            golf = _closure1_slot3;
            golf = golf[romeo];
            golf = yankee.bind(report)(golf);
            golf = golf.ApplicationCommandOptionType;
            golf = golf.CHANNEL;
            if(!(golf !== offset)) { _fun118460_ip = 790; continue _fun118460 }
 261:
            yankee = _closure1_slot0;
            golf = _closure1_slot3;
            golf = golf[romeo];
            golf = yankee.bind(report)(golf);
            golf = golf.ApplicationCommandOptionType;
            golf = golf.USER;
            if(!(golf !== offset)) { _fun118460_ip = 680; continue _fun118460 }
 297:
            yankee = _closure1_slot0;
            golf = _closure1_slot3;
            golf = golf[romeo];
            golf = yankee.bind(report)(golf);
            golf = golf.ApplicationCommandOptionType;
            golf = golf.ROLE;
            if(!(golf !== offset)) { _fun118460_ip = 591; continue _fun118460 }
 333:
            yankee = _closure1_slot0;
            golf = _closure1_slot3;
            golf = golf[romeo];
            golf = yankee.bind(report)(golf);
            golf = golf.ApplicationCommandOptionType;
            golf = golf.MENTIONABLE;
            if(!(golf !== offset)) { _fun118460_ip = 390; continue _fun118460 }
 366:
            golf = new Array(1);
            offset = {'type': 'text', 'text': ''};
            golf[0] = offset;
            return golf;
 390:
            if(!(entity != mike)) { _fun118460_ip = 471; continue _fun118460 }
 394:
            golf = mike.value;
            if(!(golf !== verify)) { _fun118460_ip = 567; continue _fun118460 }
 406:
            golf = mike.value;
            verify = 'string';
            golf = typeof golf;
            if(!(verify === golf)) { _fun118460_ip = 434; continue _fun118460 }
 422:
            golf = mike.value;
            golf = golf in options;
            if(golf) { _fun118460_ip = 537; continue _fun118460 }
 434:
            yankee = _closure1_slot6;
            offset = yankee.getUser;
            golf = global;
            romeo = golf.String;
            verify = mike.value;
            verify = romeo.bind(report)(verify);
            verify = offset.bind(yankee)(verify);
            if(!(entity == verify)) { _fun118460_ip = 495; continue _fun118460 }
 471:
            verify = new Array(1);
            offset = {'type': 'text', 'text': ''};
            verify[0] = offset;
            return verify;
 495:
            verify = {};
            offset = 'userMention';
            verify['type'] = offset;
            offset = golf.String;
            golf = mike.value;
            golf = offset.bind(report)(golf);
            verify['userId'] = golf;
            golf = new Array(1);
            golf[0] = verify;
            return golf;
 537:
            verify = {};
            golf = 'roleMention';
            verify['type'] = golf;
            golf = mike.value;
            verify['roleId'] = golf;
            golf = new Array(1);
            golf[0] = verify;
            return golf;
 567:
            golf = new Array(1);
            verify = {'type': 'textMention', 'text': '@everyone'};
            golf[0] = verify;
            return golf;
 591:
            if(!(entity != mike)) { _fun118460_ip = 623; continue _fun118460 }
 595:
            golf = mike.value;
            verify = 'string';
            golf = typeof golf;
            if(!(verify === golf)) { _fun118460_ip = 623; continue _fun118460 }
 611:
            golf = mike.value;
            golf = golf in options;
            if(golf) { _fun118460_ip = 647; continue _fun118460 }
 623:
            golf = new Array(1);
            options = {'type': 'text', 'text': ''};
            golf[0] = options;
            _fun118460_ip = 678; continue _fun118460;
 647:
            verify = {};
            options = 'roleMention';
            verify['type'] = options;
            options = mike.value;
            verify['roleId'] = options;
            options = new Array(1);
            options[0] = verify;
            golf = options;
 678:
            return golf;
 680:
            if(!(entity != mike)) { _fun118460_ip = 721; continue _fun118460 }
 684:
            offset = _closure1_slot6;
            verify = offset.getUser;
            options = global;
            yankee = options.String;
            golf = mike.value;
            golf = yankee.bind(report)(golf);
            golf = verify.bind(offset)(golf);
            if(!(entity == golf)) { _fun118460_ip = 745; continue _fun118460 }
 721:
            golf = new Array(1);
            verify = {'type': 'text', 'text': ''};
            golf[0] = verify;
            _fun118460_ip = 788; continue _fun118460;
 745:
            verify = {};
            offset = 'userMention';
            verify['type'] = offset;
            offset = options.String;
            options = mike.value;
            options = offset.bind(report)(options);
            verify['userId'] = options;
            options = new Array(1);
            options[0] = verify;
            golf = options;
 788:
            return golf;
 790:
            if(!(entity != mike)) { _fun118460_ip = 830; continue _fun118460 }
 794:
            verify = _closure1_slot5;
            options = verify.getChannel;
            golf = global;
            offset = golf.String;
            tango = mike.value;
            tango = offset.bind(report)(tango);
            tango = options.bind(verify)(tango);
            if(!(entity == tango)) { _fun118460_ip = 854; continue _fun118460 }
 830:
            tango = new Array(1);
            options = {'type': 'text', 'text': ''};
            tango[0] = options;
            _fun118460_ip = 895; continue _fun118460;
 854:
            options = {};
            verify = 'channelMention';
            options['type'] = verify;
            verify = golf.String;
            golf = mike.value;
            golf = verify.bind(report)(golf);
            options['channelId'] = golf;
            golf = new Array(1);
            golf[0] = options;
            tango = golf;
 895:
            return tango;
 897:
            if(!(entity != mike)) { _fun118460_ip = 938; continue _fun118460 }
 901:
            tango = oscar.choices;
            if(!(entity != tango)) { _fun118460_ip = 1014; continue _fun118460 }
 911:
            options = oscar.choices;
            golf = options.some;
            tango = function(argFoo) {
                entity = argFoo;
                mike = entity.value;
                entity = _closure2_slot1;
                entity = entity.value;
                entity = mike === entity;
                return entity;
            };
            tango = golf.bind(options)(tango);
            if(tango) { _fun118460_ip = 962; continue _fun118460 }
 938:
            tango = new Array(1);
            golf = {'type': 'text', 'text': ''};
            tango[0] = golf;
            return tango;
 962:
            tango = {};
            golf = 'text';
            tango['type'] = golf;
            golf = oscar.choices;
            oscar = golf.find;
            zulu = function(argFoo) {
                entity = argFoo;
                mike = entity.value;
                entity = _closure2_slot1;
                entity = entity.value;
                entity = mike === entity;
                return entity;
            };
            zulu = oscar.bind(golf)(zulu);
            zulu = zulu.displayName;
            tango['text'] = zulu;
            zulu = new Array(1);
            zulu[0] = tango;
            return zulu;
 1014:
            tango = {};
            zulu = 'text';
            tango['type'] = zulu;
            zulu = global;
            oscar = zulu.String;
            zulu = mike.value;
            zulu = oscar.bind(report)(zulu);
            tango['text'] = zulu;
            zulu = new Array(1);
            zulu[0] = tango;
            return zulu;
 1056:
            if(!(entity == mike)) { _fun118460_ip = 1084; continue _fun118460 }
 1060:
            entity = new Array(1);
            zulu = {'type': 'text', 'text': 'false'};
            entity[0] = zulu;
            _fun118460_ip = 1138; continue _fun118460;
 1084:
            zulu = {};
            tango = 'text';
            zulu['type'] = tango;
            oscar = global;
            tango = oscar.String;
            oscar = oscar.Boolean;
            mike = mike.value;
            mike = oscar.bind(report)(mike);
            mike = tango.bind(report)(mike);
            zulu['text'] = mike;
            mike = new Array(1);
            mike[0] = zulu;
            entity = mike;
 1138:
            return entity;
        }
    };
    zulu['getInitialOptionValues'] = tango;
    tango = function(argFoo) {
        _fun118464: for(var _fun118464_ip = 0; ; ) switch(_fun118464_ip) {
 0:
            report = argFoo;
            entity = null;
            if(!(entity != report)) { _fun118464_ip = 139; continue _fun118464 }
 12:
            zulu = _closure1_slot0;
            tango = _closure1_slot3;
            mike = 13;
            mike = tango[mike];
            oscar = undefined;
            zulu = zulu.bind(oscar)(mike);
            mike = zulu.isRealApplication;
            mike = mike.bind(zulu)(report);
            tango = _closure1_slot1;
            golf = _closure1_slot3;
            zulu = 14;
            zulu = golf[zulu];
            tango = tango.bind(oscar)(zulu);
            if(mike) { _fun118464_ip = 88; continue _fun118464 }
 71:
            mike = tango.makeSource;
            entity = _closure1_slot7;
            entity = mike.bind(tango)(entity);
            _fun118464_ip = 137; continue _fun118464;
 88:
            zulu = tango.getApplicationIconSource;
            mike = {};
            oscar = report.id;
            mike['id'] = oscar;
            oscar = report.icon;
            mike['icon'] = oscar;
            report = report.bot;
            mike['bot'] = report;
            report = false;
            mike['botIconFirst'] = report;
            entity = zulu.bind(tango)(mike);
 137:
            _fun118464_ip = 164; continue _fun118464;
 139:
            tango = _closure1_slot1;
            zulu = _closure1_slot3;
            mike = 12;
            zulu = zulu[mike];
            mike = undefined;
            entity = tango.bind(mike)(zulu);
 164:
            return entity;
        }
    };
    zulu['getAppLauncherIconSource'] = tango;
    tango = function(argFoo, argBar) { // Original name: useLogAppLauncherEmptyStateView
        golf = argFoo;
        var _closure2_slot0 = golf;
        report = _closure1_slot0;
        tango = _closure1_slot3;
        entity = 15;
        tango = tango[entity];
        entity = undefined;
        report = report.bind(entity)(tango);
        tango = report.useAppLauncherContext;
        tango = tango.bind(report)();
        oscar = tango.entrypoint;
        var _closure2_slot1 = oscar;
        report = _closure1_slot4;
        tango = report.useEffect;
        zulu = new Array(3);
        zulu[0] = golf;
        golf = argBar;
        zulu[1] = golf;
        zulu[2] = oscar;
        mike = function() {
            _fun118466: for(var _fun118466_ip = 0; ; ) switch(_fun118466_ip) {
 0:
                mike = _closure2_slot0;
                entity = null;
                if(!(entity != mike)) { _fun118466_ip = 78; continue _fun118466 }
 13:
                tango = _closure1_slot0;
                zulu = _closure1_slot3;
                mike = 6;
                zulu = zulu[mike];
                mike = undefined;
                tango = tango.bind(mike)(zulu);
                zulu = tango.trackWithMetadata;
                entity = _closure1_slot9;
                mike = entity.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED;
                entity = {};
                oscar = _closure2_slot0;
                entity['type'] = oscar;
                report = _closure2_slot1;
                entity['source'] = report;
                entity = zulu.bind(tango)(mike, entity);
 78:
                entity = undefined;
                return entity;
            }
        };
        mike = tango.bind(report)(mike, zulu);
        return entity;
    };
    zulu['useLogAppLauncherEmptyStateView'] = tango;
    mike = function(argFoo) { // Original name: useHandleActivityItemSelected
        _fun118467: for(var _fun118467_ip = 0; ; ) switch(_fun118467_ip) {
 0:
            entity = argFoo;
            sizing = entity.applicationId;
            kilo = entity.context;
            verify = entity.sectionName;
            var _closure2_slot0 = verify;
            zulu = entity.onActivityItemSelected;
            var _closure2_slot1 = zulu;
            zulu = entity.location;
            var _closure2_slot2 = zulu;
            options = entity.entrypoint;
            var _closure2_slot3 = options;
            offset = entity.launchingComponentId;
            golf = entity.fetchesApplication;
            report = undefined;
            if(!(golf === report)) { _fun118467_ip = 74; continue _fun118467 }
 72:
            golf = true;
 74:
            var _closure2_slot4 = report;
            var _closure2_slot5 = report;
            yankee = _closure1_slot0;
            romeo = _closure1_slot3;
            entity = 16;
            entity = romeo[entity];
            zulu = yankee.bind(report)(entity);
            entity = zulu.useAnalyticsContext;
            foxtrot = entity.bind(zulu)();
            entity = 17;
            zulu = romeo[entity];
            oscar = yankee.bind(report)(zulu);
            tango = oscar.useActivityAction;
            zulu = {};
            zulu['context'] = kilo;
            zulu['applicationId'] = sizing;
            zulu['fetchesApplication'] = golf;
            zulu = tango.bind(oscar)(zulu);
            _closure2_slot4 = zulu;
            zulu = 15;
            zulu = romeo[zulu];
            tango = yankee.bind(report)(zulu);
            zulu = tango.useAppLauncherContext;
            zulu = zulu.bind(tango)();
            oscar = zulu.entrypointParams;
            entity = romeo[entity];
            tango = yankee.bind(report)(entity);
            zulu = tango.useOnActivityItemSelected;
            entity = {};
            entity['applicationId'] = sizing;
            entity['context'] = kilo;
            kilo = _closure1_slot1;
            backup = 18;
            backup = romeo[backup];
            backup = kilo.bind(report)(backup);
            entity['embeddedActivitiesManager'] = backup;
            foxtrot = foxtrot.location;
            entity['locationObject'] = foxtrot;
            foxtrot = function(argFoo) { // Original name: onActivityItemSelectedProp
                _fun118468: for(var _fun118468_ip = 0; ; ) switch(_fun118468_ip) {
 0:
                    entity = argFoo;
                    golf = entity.applicationId;
                    mike = _closure2_slot1;
                    entity = null;
                    if(!(entity != mike)) { _fun118468_ip = 38; continue _fun118468 }
 21:
                    zulu = _closure2_slot1;
                    mike = {};
                    mike['applicationId'] = golf;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
 38:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot3;
                    entity = 6;
                    zulu = zulu[entity];
                    entity = undefined;
                    report = tango.bind(entity)(zulu);
                    tango = report.trackWithMetadata;
                    mike = _closure1_slot9;
                    zulu = mike.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED;
                    mike = {};
                    options = _closure2_slot2;
                    mike['location'] = options;
                    mike['application_id'] = golf;
                    golf = _closure2_slot0;
                    mike['section_name'] = golf;
                    golf = _closure2_slot4;
                    mike['action'] = golf;
                    oscar = _closure2_slot3;
                    mike['source'] = oscar;
                    mike = tango.bind(report)(zulu, mike);
                    return entity;
                }
            };
            entity['onActivityItemSelectedProp'] = foxtrot;
            entity['launchingComponentId'] = offset;
            offset = 7;
            offset = romeo[offset];
            offset = yankee.bind(report)(offset);
            offset = offset.CommandOrigin;
            offset = offset.APPLICATION_LAUNCHER;
            entity['commandOrigin'] = offset;
            entity['sectionName'] = verify;
            entity['source'] = options;
            entity['fetchesApplication'] = golf;
            golf = null;
            verify = golf == oscar;
            options = undefined;
            if(verify) { _fun118467_ip = 318; continue _fun118467 }
 312:
            options = oscar.customId;
 318:
            entity['customId'] = options;
            golf = golf == oscar;
            report = undefined;
            if(golf) { _fun118467_ip = 338; continue _fun118467 }
 332:
            report = oscar.referrerId;
 338:
            entity['referrerId'] = report;
            entity = zulu.bind(tango)(entity);
            _closure2_slot5 = entity;
            entity = {};
            mike = function() { // Original name: handleActivityItemSelected
                report = _closure1_slot0;
                oscar = _closure1_slot3;
                mike = 19;
                zulu = oscar[mike];
                entity = undefined;
                tango = report.bind(entity)(zulu);
                zulu = tango.triggerHapticFeedback;
                mike = oscar[mike];
                mike = report.bind(entity)(mike);
                mike = mike.HapticFeedbackTypes;
                mike = mike.IMPACT_MEDIUM;
                mike = zulu.bind(tango)(mike);
                mike = _closure2_slot5;
                mike = mike.bind(entity)();
                return entity;
            };
            entity['handleActivityItemSelected'] = mike;
            return entity;
        }
    };
    zulu['useHandleActivityItemSelected'] = mike;
    return entity;
})();