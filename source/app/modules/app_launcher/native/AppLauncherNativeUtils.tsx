// app/modules/app_launcher/native/AppLauncherNativeUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    option = argCor;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = option;
    var _closure1_slot3 = oscard;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = option.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.APP_LAUNCHER_BUILT_IN_SECTION_ICON;
    var _closure1_slot7 = golfie;
    tangon = tangon.AppLauncherRouteName;
    var _closure1_slot8 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot9 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.BuiltInSectionId;
    var _closure1_slot10 = tangon;
    tangon = 20;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/app_launcher/native/AppLauncherNativeUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: handleApplicationSelected
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            sizing = michal.location;
            offset = michal.application;
            report = michal.navigation;
            verify = michal.context;
            golfie = michal.sectionName;
            option = michal.installOnDemand;
            kiloes = michal.query;
            backup = michal.searchResultsPosition;
            zuuluu = michal.navigates;
            entity = undefined;
            if(!(zuuluu === entity)) { _fun00002_ip = 61; continue _fun00001 }
 59:
            zuuluu = true;
 61:
            oscard = michal.entrypoint;
            yankee = _closure1_slot0;
            romeon = _closure1_slot3;
            tangon = 6;
            tangon = romeon[tangon];
            foxtra = yankee.bind(entity)(tangon);
            romeon = foxtra.trackWithMetadata;
            tangon = _closure1_slot9;
            yankee = tangon.APPLICATION_COMMAND_SECTION_SELECTED;
            tangon = {};
            tangon['location'] = sizing;
            output = offset.id;
            sizing = _closure1_slot10;
            sizing = sizing.BUILT_IN;
            if(!(output !== sizing)) { _fun00002_ip = 165; continue _fun00001 }
 131:
            output = _closure1_slot0;
            result = _closure1_slot3;
            sizing = 7;
            sizing = result[sizing];
            sizing = output.bind(entity)(sizing);
            sizing = sizing.ApplicationCommandTriggerSections;
            sizing = sizing.APP;
            _fun00002_ip = 197; continue _fun00001;
 165:
            result = _closure1_slot0;
            echoed = _closure1_slot3;
            output = 7;
            output = echoed[output];
            output = result.bind(entity)(output);
            output = output.ApplicationCommandTriggerSections;
            sizing = output.BUILT_IN;
 197:
            tangon['section'] = sizing;
            output = offset.id;
            sizing = null;
            result = sizing != output;
            if(!result) { _fun00002_ip = 218; continue _fun00001 }
 215:
            sizing = output;
 218:
            tangon['application_id'] = sizing;
            tangon['section_name'] = golfie;
            tangon['query'] = kiloes;
            tangon['search_results_position'] = backup;
            tangon['source'] = oscard;
            tangon = romeon.bind(foxtra)(yankee, tangon);
            if(!zuuluu) { _fun00002_ip = 297; continue _fun00001 }
 250:
            tangon = report.navigate;
            michal = _closure1_slot8;
            zuuluu = michal.APPLICATION_VIEW;
            michal = {};
            michal['application'] = offset;
            michal['context'] = verify;
            michal['installOnDemand'] = option;
            michal['sectionName'] = golfie;
            michal['entrypoint'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
 297:
            return entity;
        }
    };
    zuuluu['handleApplicationSelected'] = tangon;
    tangon = function(argFoo) { // Original name: handleViewAllSelected
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            kiloes = entity.location;
            report = entity.navigation;
            backup = entity.context;
            foxtra = entity.sectionName;
            romeon = entity.sectionOverallPosition;
            yankee = entity.applications;
            offset = entity.sectionItemType;
            verify = entity.commands;
            option = entity.sectionDescriptors;
            golfie = entity.title;
            oscard = entity.promotedApplicationIds;
            echoed = _closure1_slot0;
            update = _closure1_slot3;
            entity = 6;
            zuuluu = update[entity];
            entity = undefined;
            output = echoed.bind(entity)(zuuluu);
            sizing = output.trackWithMetadata;
            zuuluu = _closure1_slot9;
            tangon = zuuluu.APP_LAUNCHER_SECTION_VIEW_MORE;
            zuuluu = {};
            zuuluu['section_name'] = foxtra;
            result = 8;
            result = update[result];
            result = echoed.bind(entity)(result);
            result = result.SectionItemType;
            result = result.APPS;
            if(!(offset !== result)) { _fun00004_ip = 149; continue _fun00003 }
 142:
            result = verify.length;
            _fun00004_ip = 154; continue _fun00003;
 149:
            result = yankee.length;
 154:
            zuuluu['num'] = result;
            zuuluu = sizing.bind(output)(tangon, zuuluu);
            tangon = report.navigate;
            michal = _closure1_slot8;
            zuuluu = michal.APP_LIST_VIEW;
            michal = {};
            michal['analyticsLocation'] = kiloes;
            michal['context'] = backup;
            michal['sectionName'] = foxtra;
            michal['sectionOverallPosition'] = romeon;
            michal['applications'] = yankee;
            michal['sectionItemType'] = offset;
            michal['commands'] = verify;
            michal['sectionDescriptors'] = option;
            michal['title'] = golfie;
            michal['promotedApplicationIds'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    zuuluu['handleViewAllSelected'] = tangon;
    tangon = function(argFoo) { // Original name: handleApplicationCommandSelected
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            foxtra = entity.location;
            verify = entity.context;
            kiloes = entity.command;
            var _closure2_slot0 = kiloes;
            offset = entity.section;
            yankee = entity.sectionDescriptors;
            update = entity.query;
            report = entity.navigation;
            option = entity.installOnDemand;
            golfie = entity.sectionName;
            echoed = entity.searchResultsPosition;
            oscard = entity.entrypoint;
            romeon = entity.onCommandExecuted;
            sizing = _closure1_slot0;
            output = _closure1_slot3;
            source = 9;
            tangon = output[source];
            entity = undefined;
            result = sizing.bind(entity)(tangon);
            backup = result.trackCommandSelected;
            tangon = {};
            tangon['command'] = kiloes;
            tangon['location'] = foxtra;
            source = output[source];
            ctrled = sizing.bind(entity)(source);
            source = ctrled.getCommandTriggerSection;
            source = source.bind(ctrled)(offset);
            tangon['triggerSection'] = source;
            source = update.length;
            tangon['queryLength'] = source;
            tangon['sectionName'] = golfie;
            tangon['query'] = update;
            tangon['searchResultsPosition'] = echoed;
            tangon['source'] = oscard;
            tangon = backup.bind(result)(tangon);
            backup = kiloes.type;
            tangon = 10;
            tangon = output[tangon];
            tangon = sizing.bind(entity)(tangon);
            tangon = tangon.ApplicationCommandType;
            tangon = tangon.PRIMARY_ENTRY_POINT;
            if(!(backup !== tangon)) { _fun00006_ip = 380; continue _fun00005 }
 213:
            sizing = offset.id;
            tangon = _closure1_slot10;
            tangon = tangon.FRECENCY;
            backup = offset;
            if(!(sizing === tangon)) { _fun00006_ip = 264; continue _fun00005 }
 235:
            tangon = yankee.find;
            zuuluu = function(argFoo) {
                entity = argFoo;
                michal = entity.id;
                entity = _closure2_slot0;
                entity = entity.applicationId;
                entity = michal === entity;
                return entity;
            };
            zuuluu = tangon.bind(yankee)(zuuluu);
            tangon = null;
            backup = offset;
            if(!(tangon != zuuluu)) { _fun00006_ip = 264; continue _fun00005 }
 261:
            backup = zuuluu;
 264:
            tangon = verify.type;
            zuuluu = 'channel';
            if(!(zuuluu === tangon)) { _fun00006_ip = 378; continue _fun00005 }
 277:
            tangon = _closure1_slot2;
            yankee = _closure1_slot3;
            zuuluu = 11;
            zuuluu = yankee[zuuluu];
            yankee = tangon.bind(entity)(zuuluu);
            tangon = yankee.setAppLauncherActiveCommand;
            zuuluu = verify.channel;
            zuuluu = zuuluu.id;
            zuuluu = tangon.bind(yankee)(zuuluu, kiloes);
            yankee = report.navigate;
            zuuluu = _closure1_slot8;
            tangon = zuuluu.COMMAND_VIEW;
            zuuluu = {};
            zuuluu['command'] = kiloes;
            zuuluu['section'] = backup;
            zuuluu['context'] = verify;
            zuuluu['installOnDemand'] = option;
            zuuluu['sectionName'] = golfie;
            zuuluu['analyticsLocation'] = foxtra;
            zuuluu['onCommandExecuted'] = romeon;
            zuuluu = yankee.bind(report)(tangon, zuuluu);
            _fun00006_ip = 432; continue _fun00005;
 378:
            return entity;
 380:
            tangon = report.navigate;
            michal = _closure1_slot8;
            zuuluu = michal.APPLICATION_VIEW;
            michal = {};
            offset = offset.application;
            michal['application'] = offset;
            michal['context'] = verify;
            michal['installOnDemand'] = option;
            michal['sectionName'] = golfie;
            michal['entrypoint'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
 432:
            return entity;
        }
    };
    zuuluu['handleApplicationCommandSelected'] = tangon;
    tangon = function(argFoo) {
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            oscard = entity.option;
            var _closure2_slot0 = oscard;
            offset = entity.prefilledValues;
            verify = entity.guildId;
            option = entity.roles;
            report = undefined;
            var _closure2_slot1 = report;
            entity = null;
            tangon = entity == offset;
            michal = undefined;
            if(tangon) { _fun00008_ip = 66; continue _fun00007 }
 49:
            golfie = offset.find;
            tangon = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = argFoo;
                    tangon = zuuluu.name;
                    entity = _closure2_slot0;
                    entity = entity.name;
                    entity = tangon === entity;
                    if(!entity) { _fun00010_ip = 45; continue _fun00009 }
 27:
                    zuuluu = zuuluu.type;
                    michal = _closure2_slot0;
                    michal = michal.type;
                    entity = zuuluu === michal;
 45:
                    return entity;
                }
            };
            michal = golfie.bind(offset)(tangon);
 66:
            _closure2_slot1 = michal;
            offset = oscard.type;
            yankee = _closure1_slot0;
            golfie = _closure1_slot3;
            romeon = 10;
            golfie = golfie[romeon];
            golfie = yankee.bind(report)(golfie);
            golfie = golfie.ApplicationCommandOptionType;
            golfie = golfie.BOOLEAN;
            if(!(golfie !== offset)) { _fun00008_ip = 1056; continue _fun00007 }
 117:
            yankee = _closure1_slot0;
            golfie = _closure1_slot3;
            golfie = golfie[romeon];
            golfie = yankee.bind(report)(golfie);
            golfie = golfie.ApplicationCommandOptionType;
            golfie = golfie.STRING;
            if(!(golfie !== offset)) { _fun00008_ip = 897; continue _fun00007 }
 153:
            yankee = _closure1_slot0;
            golfie = _closure1_slot3;
            golfie = golfie[romeon];
            golfie = yankee.bind(report)(golfie);
            golfie = golfie.ApplicationCommandOptionType;
            golfie = golfie.INTEGER;
            if(!(golfie !== offset)) { _fun00008_ip = 897; continue _fun00007 }
 189:
            yankee = _closure1_slot0;
            golfie = _closure1_slot3;
            golfie = golfie[romeon];
            golfie = yankee.bind(report)(golfie);
            golfie = golfie.ApplicationCommandOptionType;
            golfie = golfie.NUMBER;
            if(!(golfie !== offset)) { _fun00008_ip = 897; continue _fun00007 }
 225:
            yankee = _closure1_slot0;
            golfie = _closure1_slot3;
            golfie = golfie[romeon];
            golfie = yankee.bind(report)(golfie);
            golfie = golfie.ApplicationCommandOptionType;
            golfie = golfie.CHANNEL;
            if(!(golfie !== offset)) { _fun00008_ip = 790; continue _fun00007 }
 261:
            yankee = _closure1_slot0;
            golfie = _closure1_slot3;
            golfie = golfie[romeon];
            golfie = yankee.bind(report)(golfie);
            golfie = golfie.ApplicationCommandOptionType;
            golfie = golfie.USER;
            if(!(golfie !== offset)) { _fun00008_ip = 680; continue _fun00007 }
 297:
            yankee = _closure1_slot0;
            golfie = _closure1_slot3;
            golfie = golfie[romeon];
            golfie = yankee.bind(report)(golfie);
            golfie = golfie.ApplicationCommandOptionType;
            golfie = golfie.ROLE;
            if(!(golfie !== offset)) { _fun00008_ip = 591; continue _fun00007 }
 333:
            yankee = _closure1_slot0;
            golfie = _closure1_slot3;
            golfie = golfie[romeon];
            golfie = yankee.bind(report)(golfie);
            golfie = golfie.ApplicationCommandOptionType;
            golfie = golfie.MENTIONABLE;
            if(!(golfie !== offset)) { _fun00008_ip = 390; continue _fun00007 }
 366:
            golfie = new Array(1);
            offset = {'type': 'text', 'text': ''};
            golfie[0] = offset;
            return golfie;
 390:
            if(!(entity != michal)) { _fun00008_ip = 471; continue _fun00007 }
 394:
            golfie = michal.value;
            if(!(golfie !== verify)) { _fun00008_ip = 567; continue _fun00007 }
 406:
            golfie = michal.value;
            verify = 'string';
            golfie = typeof golfie;
            if(!(verify === golfie)) { _fun00008_ip = 434; continue _fun00007 }
 422:
            golfie = michal.value;
            golfie = golfie in option;
            if(golfie) { _fun00008_ip = 537; continue _fun00007 }
 434:
            yankee = _closure1_slot6;
            offset = yankee.getUser;
            golfie = global;
            romeon = golfie.String;
            verify = michal.value;
            verify = romeon.bind(report)(verify);
            verify = offset.bind(yankee)(verify);
            if(!(entity == verify)) { _fun00008_ip = 495; continue _fun00007 }
 471:
            verify = new Array(1);
            offset = {'type': 'text', 'text': ''};
            verify[0] = offset;
            return verify;
 495:
            verify = {};
            offset = 'userMention';
            verify['type'] = offset;
            offset = golfie.String;
            golfie = michal.value;
            golfie = offset.bind(report)(golfie);
            verify['userId'] = golfie;
            golfie = new Array(1);
            golfie[0] = verify;
            return golfie;
 537:
            verify = {};
            golfie = 'roleMention';
            verify['type'] = golfie;
            golfie = michal.value;
            verify['roleId'] = golfie;
            golfie = new Array(1);
            golfie[0] = verify;
            return golfie;
 567:
            golfie = new Array(1);
            verify = {'type': 'textMention', 'text': '@everyone'};
            golfie[0] = verify;
            return golfie;
 591:
            if(!(entity != michal)) { _fun00008_ip = 623; continue _fun00007 }
 595:
            golfie = michal.value;
            verify = 'string';
            golfie = typeof golfie;
            if(!(verify === golfie)) { _fun00008_ip = 623; continue _fun00007 }
 611:
            golfie = michal.value;
            golfie = golfie in option;
            if(golfie) { _fun00008_ip = 647; continue _fun00007 }
 623:
            golfie = new Array(1);
            option = {'type': 'text', 'text': ''};
            golfie[0] = option;
            _fun00008_ip = 678; continue _fun00007;
 647:
            verify = {};
            option = 'roleMention';
            verify['type'] = option;
            option = michal.value;
            verify['roleId'] = option;
            option = new Array(1);
            option[0] = verify;
            golfie = option;
 678:
            return golfie;
 680:
            if(!(entity != michal)) { _fun00008_ip = 721; continue _fun00007 }
 684:
            offset = _closure1_slot6;
            verify = offset.getUser;
            option = global;
            yankee = option.String;
            golfie = michal.value;
            golfie = yankee.bind(report)(golfie);
            golfie = verify.bind(offset)(golfie);
            if(!(entity == golfie)) { _fun00008_ip = 745; continue _fun00007 }
 721:
            golfie = new Array(1);
            verify = {'type': 'text', 'text': ''};
            golfie[0] = verify;
            _fun00008_ip = 788; continue _fun00007;
 745:
            verify = {};
            offset = 'userMention';
            verify['type'] = offset;
            offset = option.String;
            option = michal.value;
            option = offset.bind(report)(option);
            verify['userId'] = option;
            option = new Array(1);
            option[0] = verify;
            golfie = option;
 788:
            return golfie;
 790:
            if(!(entity != michal)) { _fun00008_ip = 830; continue _fun00007 }
 794:
            verify = _closure1_slot5;
            option = verify.getChannel;
            golfie = global;
            offset = golfie.String;
            tangon = michal.value;
            tangon = offset.bind(report)(tangon);
            tangon = option.bind(verify)(tangon);
            if(!(entity == tangon)) { _fun00008_ip = 854; continue _fun00007 }
 830:
            tangon = new Array(1);
            option = {'type': 'text', 'text': ''};
            tangon[0] = option;
            _fun00008_ip = 895; continue _fun00007;
 854:
            option = {};
            verify = 'channelMention';
            option['type'] = verify;
            verify = golfie.String;
            golfie = michal.value;
            golfie = verify.bind(report)(golfie);
            option['channelId'] = golfie;
            golfie = new Array(1);
            golfie[0] = option;
            tangon = golfie;
 895:
            return tangon;
 897:
            if(!(entity != michal)) { _fun00008_ip = 938; continue _fun00007 }
 901:
            tangon = oscard.choices;
            if(!(entity != tangon)) { _fun00008_ip = 1014; continue _fun00007 }
 911:
            option = oscard.choices;
            golfie = option.some;
            tangon = function(argFoo) {
                entity = argFoo;
                michal = entity.value;
                entity = _closure2_slot1;
                entity = entity.value;
                entity = michal === entity;
                return entity;
            };
            tangon = golfie.bind(option)(tangon);
            if(tangon) { _fun00008_ip = 962; continue _fun00007 }
 938:
            tangon = new Array(1);
            golfie = {'type': 'text', 'text': ''};
            tangon[0] = golfie;
            return tangon;
 962:
            tangon = {};
            golfie = 'text';
            tangon['type'] = golfie;
            golfie = oscard.choices;
            oscard = golfie.find;
            zuuluu = function(argFoo) {
                entity = argFoo;
                michal = entity.value;
                entity = _closure2_slot1;
                entity = entity.value;
                entity = michal === entity;
                return entity;
            };
            zuuluu = oscard.bind(golfie)(zuuluu);
            zuuluu = zuuluu.displayName;
            tangon['text'] = zuuluu;
            zuuluu = new Array(1);
            zuuluu[0] = tangon;
            return zuuluu;
 1014:
            tangon = {};
            zuuluu = 'text';
            tangon['type'] = zuuluu;
            zuuluu = global;
            oscard = zuuluu.String;
            zuuluu = michal.value;
            zuuluu = oscard.bind(report)(zuuluu);
            tangon['text'] = zuuluu;
            zuuluu = new Array(1);
            zuuluu[0] = tangon;
            return zuuluu;
 1056:
            if(!(entity == michal)) { _fun00008_ip = 1084; continue _fun00007 }
 1060:
            entity = new Array(1);
            zuuluu = {'type': 'text', 'text': 'false'};
            entity[0] = zuuluu;
            _fun00008_ip = 1138; continue _fun00007;
 1084:
            zuuluu = {};
            tangon = 'text';
            zuuluu['type'] = tangon;
            oscard = global;
            tangon = oscard.String;
            oscard = oscard.Boolean;
            michal = michal.value;
            michal = oscard.bind(report)(michal);
            michal = tangon.bind(report)(michal);
            zuuluu['text'] = michal;
            michal = new Array(1);
            michal[0] = zuuluu;
            entity = michal;
 1138:
            return entity;
        }
    };
    zuuluu['getInitialOptionValues'] = tangon;
    tangon = function(argFoo) {
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            report = argFoo;
            entity = null;
            if(!(entity != report)) { _fun00012_ip = 139; continue _fun00011 }
 12:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot3;
            michal = 13;
            michal = tangon[michal];
            oscard = undefined;
            zuuluu = zuuluu.bind(oscard)(michal);
            michal = zuuluu.isRealApplication;
            michal = michal.bind(zuuluu)(report);
            tangon = _closure1_slot1;
            golfie = _closure1_slot3;
            zuuluu = 14;
            zuuluu = golfie[zuuluu];
            tangon = tangon.bind(oscard)(zuuluu);
            if(michal) { _fun00012_ip = 88; continue _fun00011 }
 71:
            michal = tangon.makeSource;
            entity = _closure1_slot7;
            entity = michal.bind(tangon)(entity);
            _fun00012_ip = 137; continue _fun00011;
 88:
            zuuluu = tangon.getApplicationIconSource;
            michal = {};
            oscard = report.id;
            michal['id'] = oscard;
            oscard = report.icon;
            michal['icon'] = oscard;
            report = report.bot;
            michal['bot'] = report;
            report = false;
            michal['botIconFirst'] = report;
            entity = zuuluu.bind(tangon)(michal);
 137:
            _fun00012_ip = 164; continue _fun00011;
 139:
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot3;
            michal = 12;
            zuuluu = zuuluu[michal];
            michal = undefined;
            entity = tangon.bind(michal)(zuuluu);
 164:
            return entity;
        }
    };
    zuuluu['getAppLauncherIconSource'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: useLogAppLauncherEmptyStateView
        golfie = argFoo;
        var _closure2_slot0 = golfie;
        report = _closure1_slot0;
        tangon = _closure1_slot3;
        entity = 15;
        tangon = tangon[entity];
        entity = undefined;
        report = report.bind(entity)(tangon);
        tangon = report.useAppLauncherContext;
        tangon = tangon.bind(report)();
        oscard = tangon.entrypoint;
        var _closure2_slot1 = oscard;
        report = _closure1_slot4;
        tangon = report.useEffect;
        zuuluu = new Array(3);
        zuuluu[0] = golfie;
        golfie = argBar;
        zuuluu[1] = golfie;
        zuuluu[2] = oscard;
        michal = function() {
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                michal = _closure2_slot0;
                entity = null;
                if(!(entity != michal)) { _fun00014_ip = 78; continue _fun00013 }
 13:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot3;
                michal = 6;
                zuuluu = zuuluu[michal];
                michal = undefined;
                tangon = tangon.bind(michal)(zuuluu);
                zuuluu = tangon.trackWithMetadata;
                entity = _closure1_slot9;
                michal = entity.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED;
                entity = {};
                oscard = _closure2_slot0;
                entity['type'] = oscard;
                report = _closure2_slot1;
                entity['source'] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
 78:
                entity = undefined;
                return entity;
            }
        };
        michal = tangon.bind(report)(michal, zuuluu);
        return entity;
    };
    zuuluu['useLogAppLauncherEmptyStateView'] = tangon;
    michal = function(argFoo) { // Original name: useHandleActivityItemSelected
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            sizing = entity.applicationId;
            kiloes = entity.context;
            verify = entity.sectionName;
            var _closure2_slot0 = verify;
            zuuluu = entity.onActivityItemSelected;
            var _closure2_slot1 = zuuluu;
            zuuluu = entity.location;
            var _closure2_slot2 = zuuluu;
            option = entity.entrypoint;
            var _closure2_slot3 = option;
            offset = entity.launchingComponentId;
            golfie = entity.fetchesApplication;
            report = undefined;
            if(!(golfie === report)) { _fun00016_ip = 74; continue _fun00015 }
 72:
            golfie = true;
 74:
            var _closure2_slot4 = report;
            var _closure2_slot5 = report;
            yankee = _closure1_slot0;
            romeon = _closure1_slot3;
            entity = 16;
            entity = romeon[entity];
            zuuluu = yankee.bind(report)(entity);
            entity = zuuluu.useAnalyticsContext;
            foxtra = entity.bind(zuuluu)();
            entity = 17;
            zuuluu = romeon[entity];
            oscard = yankee.bind(report)(zuuluu);
            tangon = oscard.useActivityAction;
            zuuluu = {};
            zuuluu['context'] = kiloes;
            zuuluu['applicationId'] = sizing;
            zuuluu['fetchesApplication'] = golfie;
            zuuluu = tangon.bind(oscard)(zuuluu);
            _closure2_slot4 = zuuluu;
            zuuluu = 15;
            zuuluu = romeon[zuuluu];
            tangon = yankee.bind(report)(zuuluu);
            zuuluu = tangon.useAppLauncherContext;
            zuuluu = zuuluu.bind(tangon)();
            oscard = zuuluu.entrypointParams;
            entity = romeon[entity];
            tangon = yankee.bind(report)(entity);
            zuuluu = tangon.useOnActivityItemSelected;
            entity = {};
            entity['applicationId'] = sizing;
            entity['context'] = kiloes;
            kiloes = _closure1_slot1;
            backup = 18;
            backup = romeon[backup];
            backup = kiloes.bind(report)(backup);
            entity['embeddedActivitiesManager'] = backup;
            foxtra = foxtra.location;
            entity['locationObject'] = foxtra;
            foxtra = function(argFoo) { // Original name: onActivityItemSelectedProp
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    entity = argFoo;
                    golfie = entity.applicationId;
                    michal = _closure2_slot1;
                    entity = null;
                    if(!(entity != michal)) { _fun00018_ip = 38; continue _fun00017 }
 21:
                    zuuluu = _closure2_slot1;
                    michal = {};
                    michal['applicationId'] = golfie;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
 38:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot3;
                    entity = 6;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    report = tangon.bind(entity)(zuuluu);
                    tangon = report.trackWithMetadata;
                    michal = _closure1_slot9;
                    zuuluu = michal.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED;
                    michal = {};
                    option = _closure2_slot2;
                    michal['location'] = option;
                    michal['application_id'] = golfie;
                    golfie = _closure2_slot0;
                    michal['section_name'] = golfie;
                    golfie = _closure2_slot4;
                    michal['action'] = golfie;
                    oscard = _closure2_slot3;
                    michal['source'] = oscard;
                    michal = tangon.bind(report)(zuuluu, michal);
                    return entity;
                }
            };
            entity['onActivityItemSelectedProp'] = foxtra;
            entity['launchingComponentId'] = offset;
            offset = 7;
            offset = romeon[offset];
            offset = yankee.bind(report)(offset);
            offset = offset.CommandOrigin;
            offset = offset.APPLICATION_LAUNCHER;
            entity['commandOrigin'] = offset;
            entity['sectionName'] = verify;
            entity['source'] = option;
            entity['fetchesApplication'] = golfie;
            golfie = null;
            verify = golfie == oscard;
            option = undefined;
            if(verify) { _fun00016_ip = 318; continue _fun00015 }
 312:
            option = oscard.customId;
 318:
            entity['customId'] = option;
            golfie = golfie == oscard;
            report = undefined;
            if(golfie) { _fun00016_ip = 338; continue _fun00015 }
 332:
            report = oscard.referrerId;
 338:
            entity['referrerId'] = report;
            entity = zuuluu.bind(tangon)(entity);
            _closure2_slot5 = entity;
            entity = {};
            michal = function() { // Original name: handleActivityItemSelected
                report = _closure1_slot0;
                oscard = _closure1_slot3;
                michal = 19;
                zuuluu = oscard[michal];
                entity = undefined;
                tangon = report.bind(entity)(zuuluu);
                zuuluu = tangon.triggerHapticFeedback;
                michal = oscard[michal];
                michal = report.bind(entity)(michal);
                michal = michal.HapticFeedbackTypes;
                michal = michal.IMPACT_MEDIUM;
                michal = zuuluu.bind(tangon)(michal);
                michal = _closure2_slot5;
                michal = michal.bind(entity)();
                return entity;
            };
            entity['handleActivityItemSelected'] = michal;
            return entity;
        }
    };
    zuuluu['useHandleActivityItemSelected'] = michal;
    return entity;
})();