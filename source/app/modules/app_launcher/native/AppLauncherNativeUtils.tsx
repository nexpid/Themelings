// app/modules/app_launcher/native/AppLauncherNativeUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var8 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var8;
    var _closure1_slot3 = var6;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.APP_LAUNCHER_BUILT_IN_SECTION_ICON;
    var _closure1_slot7 = var7;
    var4 = var4.AppLauncherRouteName;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.BuiltInSectionId;
    var _closure1_slot10 = var4;
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/AppLauncherNativeUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function handleApplicationSelected(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var16 = var2.location;
            var10 = var2.application;
            var5 = var2.navigation;
            var9 = var2.context;
            var7 = var2.sectionName;
            var8 = var2.installOnDemand;
            var15 = var2.query;
            var14 = var2.searchResultsPosition;
            var3 = var2.navigates;
            var1 = undefined;
            if(!(var3 === var1)) { _fun0001_ip = 62; continue _fun0001 }
 60:
            var3 = true;
 62:
            var6 = var2.entrypoint;
            var11 = _closure1_slot0;
            var12 = _closure1_slot3;
            var4 = 6;
            var4 = var12[var4];
            var13 = var11.bind(var1)(var4);
            var12 = var13.trackWithMetadata;
            var4 = _closure1_slot9;
            var11 = var4.APPLICATION_COMMAND_SECTION_SELECTED;
            var4 = {};
            var4['location'] = var16;
            var17 = var10.id;
            var16 = _closure1_slot10;
            var16 = var16.BUILT_IN;
            if(!(var17 !== var16)) { _fun0001_ip = 166; continue _fun0001 }
 132:
            var17 = _closure1_slot0;
            var18 = _closure1_slot3;
            var16 = 7;
            var16 = var18[var16];
            var16 = var17.bind(var1)(var16);
            var16 = var16.ApplicationCommandTriggerSections;
            var16 = var16.APP;
            _fun0001_ip = 198; continue _fun0001;
 166:
            var18 = _closure1_slot0;
            var19 = _closure1_slot3;
            var17 = 7;
            var17 = var19[var17];
            var17 = var18.bind(var1)(var17);
            var17 = var17.ApplicationCommandTriggerSections;
            var16 = var17.BUILT_IN;
 198:
            var4['section'] = var16;
            var17 = var10.id;
            var16 = null;
            var18 = var16 != var17;
            if(!var18) { _fun0001_ip = 219; continue _fun0001 }
 216:
            var16 = var17;
 219:
            var4['application_id'] = var16;
            var4['section_name'] = var7;
            var4['query'] = var15;
            var4['search_results_position'] = var14;
            var4['source'] = var6;
            var4 = var12.bind(var13)(var11, var4);
            if(!var3) { _fun0001_ip = 299; continue _fun0001 }
 252:
            var4 = var5.navigate;
            var2 = _closure1_slot8;
            var3 = var2.APPLICATION_VIEW;
            var2 = {};
            var2['application'] = var10;
            var2['context'] = var9;
            var2['installOnDemand'] = var8;
            var2['sectionName'] = var7;
            var2['entrypoint'] = var6;
            var2 = var4.bind(var5)(var3, var2);
 299:
            return var1;
        }
    };
    var3['handleApplicationSelected'] = var4;
    var4 = function handleViewAllSelected(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var15 = var1.location;
            var5 = var1.navigation;
            var14 = var1.context;
            var13 = var1.sectionName;
            var12 = var1.sectionOverallPosition;
            var11 = var1.applications;
            var10 = var1.sectionItemType;
            var9 = var1.commands;
            var8 = var1.sectionDescriptors;
            var7 = var1.title;
            var6 = var1.promotedApplicationIds;
            var19 = _closure1_slot0;
            var20 = _closure1_slot3;
            var1 = 6;
            var3 = var20[var1];
            var1 = undefined;
            var17 = var19.bind(var1)(var3);
            var16 = var17.trackWithMetadata;
            var3 = _closure1_slot9;
            var4 = var3.APP_LAUNCHER_SECTION_VIEW_MORE;
            var3 = {};
            var3['section_name'] = var13;
            var18 = 8;
            var18 = var20[var18];
            var18 = var19.bind(var1)(var18);
            var18 = var18.SectionItemType;
            var18 = var18.APPS;
            if(!(var10 !== var18)) { _fun0002_ip = 149; continue _fun0002 }
 142:
            var18 = var9.length;
            _fun0002_ip = 154; continue _fun0002;
 149:
            var18 = var11.length;
 154:
            var3['num'] = var18;
            var3 = var16.bind(var17)(var4, var3);
            var4 = var5.navigate;
            var2 = _closure1_slot8;
            var3 = var2.APP_LIST_VIEW;
            var2 = {};
            var2['analyticsLocation'] = var15;
            var2['context'] = var14;
            var2['sectionName'] = var13;
            var2['sectionOverallPosition'] = var12;
            var2['applications'] = var11;
            var2['sectionItemType'] = var10;
            var2['commands'] = var9;
            var2['sectionDescriptors'] = var8;
            var2['title'] = var7;
            var2['promotedApplicationIds'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['handleViewAllSelected'] = var4;
    var4 = function handleApplicationCommandSelected(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var13 = var1.location;
            var9 = var1.context;
            var15 = var1.command;
            var _closure2_slot0 = var15;
            var10 = var1.section;
            var11 = var1.sectionDescriptors;
            var20 = var1.query;
            var5 = var1.navigation;
            var8 = var1.installOnDemand;
            var7 = var1.sectionName;
            var19 = var1.searchResultsPosition;
            var6 = var1.entrypoint;
            var12 = var1.onCommandExecuted;
            var16 = _closure1_slot0;
            var17 = _closure1_slot3;
            var21 = 9;
            var4 = var17[var21];
            var1 = undefined;
            var18 = var16.bind(var1)(var4);
            var14 = var18.trackCommandSelected;
            var4 = {};
            var4['command'] = var15;
            var4['location'] = var13;
            var21 = var17[var21];
            var22 = var16.bind(var1)(var21);
            var21 = var22.getCommandTriggerSection;
            var21 = var21.bind(var22)(var10);
            var4['triggerSection'] = var21;
            var21 = var20.length;
            var4['queryLength'] = var21;
            var4['sectionName'] = var7;
            var4['query'] = var20;
            var4['searchResultsPosition'] = var19;
            var4['source'] = var6;
            var4 = var14.bind(var18)(var4);
            var14 = var15.type;
            var4 = 10;
            var4 = var17[var4];
            var4 = var16.bind(var1)(var4);
            var4 = var4.ApplicationCommandType;
            var4 = var4.PRIMARY_ENTRY_POINT;
            if(!(var14 !== var4)) { _fun0003_ip = 383; continue _fun0003 }
 215:
            var16 = var10.id;
            var4 = _closure1_slot10;
            var4 = var4.FRECENCY;
            var14 = var10;
            if(!(var16 === var4)) { _fun0003_ip = 267; continue _fun0003 }
 237:
            var4 = var11.find;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var1.applicationId;
                var1 = var2 === var1;
                return var1;
            };
            var3 = var4.bind(var11)(var3);
            var4 = null;
            var14 = var10;
            if(!(var4 != var3)) { _fun0003_ip = 267; continue _fun0003 }
 264:
            var14 = var3;
 267:
            var4 = var9.type;
            var3 = 'channel';
            if(!(var3 === var4)) { _fun0003_ip = 381; continue _fun0003 }
 280:
            var4 = _closure1_slot2;
            var11 = _closure1_slot3;
            var3 = 11;
            var3 = var11[var3];
            var11 = var4.bind(var1)(var3);
            var4 = var11.setAppLauncherActiveCommand;
            var3 = var9.channel;
            var3 = var3.id;
            var3 = var4.bind(var11)(var3, var15);
            var11 = var5.navigate;
            var3 = _closure1_slot8;
            var4 = var3.COMMAND_VIEW;
            var3 = {};
            var3['command'] = var15;
            var3['section'] = var14;
            var3['context'] = var9;
            var3['installOnDemand'] = var8;
            var3['sectionName'] = var7;
            var3['analyticsLocation'] = var13;
            var3['onCommandExecuted'] = var12;
            var3 = var11.bind(var5)(var4, var3);
            _fun0003_ip = 435; continue _fun0003;
 381:
            return var1;
 383:
            var4 = var5.navigate;
            var2 = _closure1_slot8;
            var3 = var2.APPLICATION_VIEW;
            var2 = {};
            var10 = var10.application;
            var2['application'] = var10;
            var2['context'] = var9;
            var2['installOnDemand'] = var8;
            var2['sectionName'] = var7;
            var2['entrypoint'] = var6;
            var2 = var4.bind(var5)(var3, var2);
 435:
            return var1;
        }
    };
    var3['handleApplicationCommandSelected'] = var4;
    var4 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var6 = var1.option;
            var _closure2_slot0 = var6;
            var10 = var1.prefilledValues;
            var9 = var1.guildId;
            var8 = var1.roles;
            var5 = undefined;
            var _closure2_slot1 = var5;
            var1 = null;
            var4 = var1 == var10;
            var2 = undefined;
            if(var4) { _fun0004_ip = 67; continue _fun0004 }
 49:
            var7 = var10.find;
            var4 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = arg1;
                    var4 = var3.name;
                    var1 = _closure2_slot0;
                    var1 = var1.name;
                    var1 = var4 === var1;
                    if(!var1) { _fun0005_ip = 45; continue _fun0005 }
 27:
                    var3 = var3.type;
                    var2 = _closure2_slot0;
                    var2 = var2.type;
                    var1 = var3 === var2;
 45:
                    return var1;
                }
            };
            var2 = var7.bind(var10)(var4);
 67:
            _closure2_slot1 = var2;
            var10 = var6.type;
            var11 = _closure1_slot0;
            var7 = _closure1_slot3;
            var12 = 10;
            var7 = var7[var12];
            var7 = var11.bind(var5)(var7);
            var7 = var7.ApplicationCommandOptionType;
            var7 = var7.BOOLEAN;
            if(!(var7 !== var10)) { _fun0004_ip = 1058; continue _fun0004 }
 118:
            var11 = _closure1_slot0;
            var7 = _closure1_slot3;
            var7 = var7[var12];
            var7 = var11.bind(var5)(var7);
            var7 = var7.ApplicationCommandOptionType;
            var7 = var7.STRING;
            if(!(var7 !== var10)) { _fun0004_ip = 898; continue _fun0004 }
 154:
            var11 = _closure1_slot0;
            var7 = _closure1_slot3;
            var7 = var7[var12];
            var7 = var11.bind(var5)(var7);
            var7 = var7.ApplicationCommandOptionType;
            var7 = var7.INTEGER;
            if(!(var7 !== var10)) { _fun0004_ip = 898; continue _fun0004 }
 190:
            var11 = _closure1_slot0;
            var7 = _closure1_slot3;
            var7 = var7[var12];
            var7 = var11.bind(var5)(var7);
            var7 = var7.ApplicationCommandOptionType;
            var7 = var7.NUMBER;
            if(!(var7 !== var10)) { _fun0004_ip = 898; continue _fun0004 }
 226:
            var11 = _closure1_slot0;
            var7 = _closure1_slot3;
            var7 = var7[var12];
            var7 = var11.bind(var5)(var7);
            var7 = var7.ApplicationCommandOptionType;
            var7 = var7.CHANNEL;
            if(!(var7 !== var10)) { _fun0004_ip = 791; continue _fun0004 }
 262:
            var11 = _closure1_slot0;
            var7 = _closure1_slot3;
            var7 = var7[var12];
            var7 = var11.bind(var5)(var7);
            var7 = var7.ApplicationCommandOptionType;
            var7 = var7.USER;
            if(!(var7 !== var10)) { _fun0004_ip = 681; continue _fun0004 }
 298:
            var11 = _closure1_slot0;
            var7 = _closure1_slot3;
            var7 = var7[var12];
            var7 = var11.bind(var5)(var7);
            var7 = var7.ApplicationCommandOptionType;
            var7 = var7.ROLE;
            if(!(var7 !== var10)) { _fun0004_ip = 592; continue _fun0004 }
 334:
            var11 = _closure1_slot0;
            var7 = _closure1_slot3;
            var7 = var7[var12];
            var7 = var11.bind(var5)(var7);
            var7 = var7.ApplicationCommandOptionType;
            var7 = var7.MENTIONABLE;
            if(!(var7 !== var10)) { _fun0004_ip = 391; continue _fun0004 }
 367:
            var7 = new Array(1);
            var10 = {'type': 'text', 'text': ''};
            var7[0] = var10;
            return var7;
 391:
            if(!(var1 != var2)) { _fun0004_ip = 472; continue _fun0004 }
 395:
            var7 = var2.value;
            if(!(var7 !== var9)) { _fun0004_ip = 568; continue _fun0004 }
 407:
            var7 = var2.value;
            var9 = 'string';
            var7 = typeof var7;
            if(!(var9 === var7)) { _fun0004_ip = 435; continue _fun0004 }
 423:
            var7 = var2.value;
            var7 = var7 in var8;
            if(var7) { _fun0004_ip = 538; continue _fun0004 }
 435:
            var11 = _closure1_slot6;
            var10 = var11.getUser;
            var7 = global;
            var12 = var7.String;
            var9 = var2.value;
            var9 = var12.bind(var5)(var9);
            var9 = var10.bind(var11)(var9);
            if(!(var1 == var9)) { _fun0004_ip = 496; continue _fun0004 }
 472:
            var9 = new Array(1);
            var10 = {'type': 'text', 'text': ''};
            var9[0] = var10;
            return var9;
 496:
            var9 = {};
            var10 = 'userMention';
            var9['type'] = var10;
            var10 = var7.String;
            var7 = var2.value;
            var7 = var10.bind(var5)(var7);
            var9['userId'] = var7;
            var7 = new Array(1);
            var7[0] = var9;
            return var7;
 538:
            var9 = {};
            var7 = 'roleMention';
            var9['type'] = var7;
            var7 = var2.value;
            var9['roleId'] = var7;
            var7 = new Array(1);
            var7[0] = var9;
            return var7;
 568:
            var7 = new Array(1);
            var9 = {'type': 'textMention', 'text': '@everyone'};
            var7[0] = var9;
            return var7;
 592:
            if(!(var1 != var2)) { _fun0004_ip = 624; continue _fun0004 }
 596:
            var7 = var2.value;
            var9 = 'string';
            var7 = typeof var7;
            if(!(var9 === var7)) { _fun0004_ip = 624; continue _fun0004 }
 612:
            var7 = var2.value;
            var7 = var7 in var8;
            if(var7) { _fun0004_ip = 648; continue _fun0004 }
 624:
            var7 = new Array(1);
            var8 = {'type': 'text', 'text': ''};
            var7[0] = var8;
            _fun0004_ip = 679; continue _fun0004;
 648:
            var9 = {};
            var8 = 'roleMention';
            var9['type'] = var8;
            var8 = var2.value;
            var9['roleId'] = var8;
            var8 = new Array(1);
            var8[0] = var9;
            var7 = var8;
 679:
            return var7;
 681:
            if(!(var1 != var2)) { _fun0004_ip = 722; continue _fun0004 }
 685:
            var10 = _closure1_slot6;
            var9 = var10.getUser;
            var8 = global;
            var11 = var8.String;
            var7 = var2.value;
            var7 = var11.bind(var5)(var7);
            var7 = var9.bind(var10)(var7);
            if(!(var1 == var7)) { _fun0004_ip = 746; continue _fun0004 }
 722:
            var7 = new Array(1);
            var9 = {'type': 'text', 'text': ''};
            var7[0] = var9;
            _fun0004_ip = 789; continue _fun0004;
 746:
            var9 = {};
            var10 = 'userMention';
            var9['type'] = var10;
            var10 = var8.String;
            var8 = var2.value;
            var8 = var10.bind(var5)(var8);
            var9['userId'] = var8;
            var8 = new Array(1);
            var8[0] = var9;
            var7 = var8;
 789:
            return var7;
 791:
            if(!(var1 != var2)) { _fun0004_ip = 831; continue _fun0004 }
 795:
            var9 = _closure1_slot5;
            var8 = var9.getChannel;
            var7 = global;
            var10 = var7.String;
            var4 = var2.value;
            var4 = var10.bind(var5)(var4);
            var4 = var8.bind(var9)(var4);
            if(!(var1 == var4)) { _fun0004_ip = 855; continue _fun0004 }
 831:
            var4 = new Array(1);
            var8 = {'type': 'text', 'text': ''};
            var4[0] = var8;
            _fun0004_ip = 896; continue _fun0004;
 855:
            var8 = {};
            var9 = 'channelMention';
            var8['type'] = var9;
            var9 = var7.String;
            var7 = var2.value;
            var7 = var9.bind(var5)(var7);
            var8['channelId'] = var7;
            var7 = new Array(1);
            var7[0] = var8;
            var4 = var7;
 896:
            return var4;
 898:
            if(!(var1 != var2)) { _fun0004_ip = 939; continue _fun0004 }
 902:
            var4 = var6.choices;
            if(!(var1 != var4)) { _fun0004_ip = 1016; continue _fun0004 }
 912:
            var8 = var6.choices;
            var7 = var8.some;
            var4 = function(arg1) {
                var1 = arg1;
                var2 = var1.value;
                var1 = _closure2_slot1;
                var1 = var1.value;
                var1 = var2 === var1;
                return var1;
            };
            var4 = var7.bind(var8)(var4);
            if(var4) { _fun0004_ip = 963; continue _fun0004 }
 939:
            var4 = new Array(1);
            var7 = {'type': 'text', 'text': ''};
            var4[0] = var7;
            return var4;
 963:
            var4 = {};
            var7 = 'text';
            var4['type'] = var7;
            var7 = var6.choices;
            var6 = var7.find;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.value;
                var1 = _closure2_slot1;
                var1 = var1.value;
                var1 = var2 === var1;
                return var1;
            };
            var3 = var6.bind(var7)(var3);
            var3 = var3.displayName;
            var4['text'] = var3;
            var3 = new Array(1);
            var3[0] = var4;
            return var3;
 1016:
            var4 = {};
            var3 = 'text';
            var4['type'] = var3;
            var3 = global;
            var6 = var3.String;
            var3 = var2.value;
            var3 = var6.bind(var5)(var3);
            var4['text'] = var3;
            var3 = new Array(1);
            var3[0] = var4;
            return var3;
 1058:
            if(!(var1 == var2)) { _fun0004_ip = 1086; continue _fun0004 }
 1062:
            var1 = new Array(1);
            var3 = {'type': 'text', 'text': 'false'};
            var1[0] = var3;
            _fun0004_ip = 1140; continue _fun0004;
 1086:
            var3 = {};
            var4 = 'text';
            var3['type'] = var4;
            var6 = global;
            var4 = var6.String;
            var6 = var6.Boolean;
            var2 = var2.value;
            var2 = var6.bind(var5)(var2);
            var2 = var4.bind(var5)(var2);
            var3['text'] = var2;
            var2 = new Array(1);
            var2[0] = var3;
            var1 = var2;
 1140:
            return var1;
        }
    };
    var3['getInitialOptionValues'] = var4;
    var4 = function(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var5 = arg1;
            var1 = null;
            if(!(var1 != var5)) { _fun0006_ip = 139; continue _fun0006 }
 12:
            var3 = _closure1_slot0;
            var4 = _closure1_slot3;
            var2 = 13;
            var2 = var4[var2];
            var6 = undefined;
            var3 = var3.bind(var6)(var2);
            var2 = var3.isRealApplication;
            var2 = var2.bind(var3)(var5);
            var4 = _closure1_slot1;
            var7 = _closure1_slot3;
            var3 = 14;
            var3 = var7[var3];
            var4 = var4.bind(var6)(var3);
            if(var2) { _fun0006_ip = 88; continue _fun0006 }
 71:
            var2 = var4.makeSource;
            var1 = _closure1_slot7;
            var1 = var2.bind(var4)(var1);
            _fun0006_ip = 137; continue _fun0006;
 88:
            var3 = var4.getApplicationIconSource;
            var2 = {};
            var6 = var5.id;
            var2['id'] = var6;
            var6 = var5.icon;
            var2['icon'] = var6;
            var5 = var5.bot;
            var2['bot'] = var5;
            var5 = false;
            var2['botIconFirst'] = var5;
            var1 = var3.bind(var4)(var2);
 137:
            _fun0006_ip = 164; continue _fun0006;
 139:
            var4 = _closure1_slot1;
            var3 = _closure1_slot3;
            var2 = 12;
            var3 = var3[var2];
            var2 = undefined;
            var1 = var4.bind(var2)(var3);
 164:
            return var1;
        }
    };
    var3['getAppLauncherIconSource'] = var4;
    var4 = function useLogAppLauncherEmptyStateView(arg1, arg2) {
        var7 = arg1;
        var _closure2_slot0 = var7;
        var5 = _closure1_slot0;
        var4 = _closure1_slot3;
        var1 = 15;
        var4 = var4[var1];
        var1 = undefined;
        var5 = var5.bind(var1)(var4);
        var4 = var5.useAppLauncherContext;
        var4 = var4.bind(var5)();
        var6 = var4.entrypoint;
        var _closure2_slot1 = var6;
        var5 = _closure1_slot4;
        var4 = var5.useEffect;
        var3 = new Array(3);
        var3[0] = var7;
        var7 = arg2;
        var3[1] = var7;
        var3[2] = var6;
        var2 = function() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var2 = _closure2_slot0;
                var1 = null;
                if(!(var1 != var2)) { _fun0007_ip = 78; continue _fun0007 }
 13:
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.trackWithMetadata;
                var1 = _closure1_slot9;
                var2 = var1.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED;
                var1 = {};
                var6 = _closure2_slot0;
                var1['type'] = var6;
                var5 = _closure2_slot1;
                var1['source'] = var5;
                var1 = var3.bind(var4)(var2, var1);
 78:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['useLogAppLauncherEmptyStateView'] = var4;
    var2 = function useHandleActivityItemSelected(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var6 = var1.applicationId;
            var15 = var1.context;
            var9 = var1.sectionName;
            var _closure2_slot0 = var9;
            var3 = var1.onActivityItemSelected;
            var _closure2_slot1 = var3;
            var3 = var1.location;
            var _closure2_slot2 = var3;
            var8 = var1.entrypoint;
            var _closure2_slot3 = var8;
            var10 = var1.launchingComponentId;
            var7 = var1.fetchesApplication;
            var5 = undefined;
            if(!(var7 === var5)) { _fun0008_ip = 74; continue _fun0008 }
 72:
            var7 = true;
 74:
            var _closure2_slot4 = var5;
            var _closure2_slot5 = var5;
            var11 = _closure1_slot0;
            var12 = _closure1_slot3;
            var1 = 16;
            var1 = var12[var1];
            var3 = var11.bind(var5)(var1);
            var1 = var3.useAnalyticsContext;
            var13 = var1.bind(var3)();
            var1 = 17;
            var3 = var12[var1];
            var16 = var11.bind(var5)(var3);
            var4 = var16.useActivityAction;
            var3 = {};
            var3['context'] = var15;
            var3['applicationId'] = var6;
            var3['fetchesApplication'] = var7;
            var3 = var4.bind(var16)(var3);
            _closure2_slot4 = var3;
            var3 = 18;
            var3 = var12[var3];
            var4 = var11.bind(var5)(var3);
            var3 = var4.useGetOrFetchApplication;
            var16 = var3.bind(var4)(var6, var7);
            var3 = 15;
            var3 = var12[var3];
            var4 = var11.bind(var5)(var3);
            var3 = var4.useAppLauncherContext;
            var3 = var3.bind(var4)();
            var6 = var3.entrypointParams;
            var1 = var12[var1];
            var4 = var11.bind(var5)(var1);
            var3 = var4.useOnActivityItemSelected;
            var1 = {};
            var1['application'] = var16;
            var1['context'] = var15;
            var15 = _closure1_slot1;
            var14 = 19;
            var14 = var12[var14];
            var14 = var15.bind(var5)(var14);
            var1['embeddedActivitiesManager'] = var14;
            var13 = var13.location;
            var1['locationObject'] = var13;
            var13 = function onActivityItemSelectedProp(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var1 = arg1;
                    var7 = var1.applicationId;
                    var2 = _closure2_slot1;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0009_ip = 38; continue _fun0009 }
 21:
                    var3 = _closure2_slot1;
                    var2 = {};
                    var2['applicationId'] = var7;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 38:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 6;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.trackWithMetadata;
                    var2 = _closure1_slot9;
                    var3 = var2.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED;
                    var2 = {};
                    var8 = _closure2_slot2;
                    var2['location'] = var8;
                    var2['application_id'] = var7;
                    var7 = _closure2_slot0;
                    var2['section_name'] = var7;
                    var7 = _closure2_slot4;
                    var2['action'] = var7;
                    var6 = _closure2_slot3;
                    var2['source'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var1['onActivityItemSelectedProp'] = var13;
            var1['launchingComponentId'] = var10;
            var10 = 7;
            var10 = var12[var10];
            var10 = var11.bind(var5)(var10);
            var10 = var10.CommandOrigin;
            var10 = var10.APPLICATION_LAUNCHER;
            var1['commandOrigin'] = var10;
            var1['sectionName'] = var9;
            var1['source'] = var8;
            var1['fetchesApplication'] = var7;
            var7 = null;
            var9 = var7 == var6;
            var8 = undefined;
            if(var9) { _fun0008_ip = 342; continue _fun0008 }
 336:
            var8 = var6.customId;
 342:
            var1['customId'] = var8;
            var7 = var7 == var6;
            var5 = undefined;
            if(var7) { _fun0008_ip = 362; continue _fun0008 }
 356:
            var5 = var6.referrerId;
 362:
            var1['referrerId'] = var5;
            var1 = var3.bind(var4)(var1);
            _closure2_slot5 = var1;
            var1 = {};
            var2 = function handleActivityItemSelected() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var2 = 20;
                var3 = var6[var2];
                var1 = undefined;
                var4 = var5.bind(var1)(var3);
                var3 = var4.triggerHapticFeedback;
                var2 = var6[var2];
                var2 = var5.bind(var1)(var2);
                var2 = var2.HapticFeedbackTypes;
                var2 = var2.IMPACT_MEDIUM;
                var2 = var3.bind(var4)(var2);
                var2 = _closure2_slot5;
                var2 = var2.bind(var1)();
                return var1;
            };
            var1['handleActivityItemSelected'] = var2;
            return var1;
        }
    };
    var3['useHandleActivityItemSelected'] = var2;
    return var1;
})();