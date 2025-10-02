// app/modules/user_profile/native/UserProfileAboutMeCardCommand.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsxs;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var11 = 4;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.MENTION_FOREGROUND;
    var10['color'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.MENTION_BACKGROUND;
    var10['backgroundColor'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var10['marginEnd'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_12;
    var10['marginBottom'] = var11;
    var4['commandClickable'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot5 = var4;
    var4 = var7.memo;
    var2 = function UserProfileAboutMeCardCommand(arg1) {
        var1 = arg1;
        var2 = var1.application;
        var _closure2_slot0 = var2;
        var5 = var1.command;
        var _closure2_slot1 = var5;
        var1 = var1.channel;
        var _closure2_slot2 = var1;
        var2 = _closure1_slot5;
        var4 = undefined;
        var6 = var2.bind(var4)();
        var3 = _closure1_slot4;
        var2 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 5;
        var1 = var8[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.Text;
        var1 = {};
        var8 = 'text-md/bold';
        var1['variant'] = var8;
        var8 = function onPress() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 6;
                var2 = var4[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var2 = var6.getBestActiveInput;
                var10 = var2.bind(var6)();
                var _closure3_slot0 = var10;
                var2 = 7;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.handleTapCommandMention;
                var2 = {};
                var7 = _closure2_slot2;
                var7 = var7.id;
                var2['channelId'] = var7;
                var7 = null;
                var9 = var7 == var10;
                var8 = undefined;
                if(var9) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var9 = var10.getText;
                var8 = var9.bind(var10)();
case 2:
                var9 = var7 != var8;
                var7 = '';
                if(!var9) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var7 = var8;
case 4:
                var2['currentText'] = var7;
                var6 = _closure2_slot1;
                var7 = var6.id;
                var2['commandId'] = var7;
                var6 = var6.displayName;
                var2['commandName'] = var6;
                var6 = function onOpenCustomKeyboard(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var3 = _closure3_slot0;
                        var1 = null;
                        var3 = var1 == var3;
                        var1 = undefined;
                        if(var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                        var4 = _closure3_slot0;
                        var3 = var4.openCustomKeyboard;
                        var2 = arg1;
                        var1 = var3.bind(var4)(var2);
case 6:
                        return var1;
                    }
                };
                var2['onOpenCustomKeyboard'] = var6;
                var5 = function onSetCommand() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 8;
                        var2 = var2[var1];
                        var1 = undefined;
                        var9 = var3.bind(var1)(var2);
                        var8 = var9.track;
                        var2 = _closure1_slot3;
                        var3 = var2.POPULAR_APPLICATION_COMMAND_CLICKED;
                        var2 = {};
                        var4 = _closure2_slot0;
                        var6 = null;
                        var10 = var6 == var4;
                        var4 = undefined;
                        if(var10) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                        var10 = _closure2_slot0;
                        var4 = var10.id;
case 8:
                        var2['application_id'] = var4;
                        var4 = _closure2_slot1;
                        var4 = var4.id;
                        var2['command_id'] = var4;
                        var12 = _closure2_slot2;
                        var4 = var12.getGuildId;
                        var4 = var4.bind(var12)();
                        var2['guild_id'] = var4;
                        var11 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var10 = 9;
                        var10 = var4[var10];
                        var11 = var11.bind(var1)(var10);
                        var10 = var11.collectChannelAnalyticsMetadata;
                        var13 = var10.bind(var11)(var12);
                        var14 = var2;
                        var10 = copyDataProperties(var14, var13);
                        var2 = var8.bind(var9)(var3, var2);
                        var3 = _closure1_slot1;
                        var2 = 10;
                        var2 = var4[var2];
                        var8 = var3.bind(var1)(var2);
                        var2 = var8.hideActionSheet;
                        var2 = var2.bind(var8)();
                        var2 = 11;
                        var2 = var4[var2];
                        var2 = var3.bind(var1)(var2);
                        var2 = var2.bind(var1)();
                        var2 = _closure3_slot0;
                        if(!(var6 != var2)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                        var4 = _closure3_slot0;
                        var2 = var4.openSystemKeyboard;
                        var2 = var2.bind(var4)();
case 10:
                        var2 = _closure3_slot0;
                        var2 = var6 == var2;
                        var4 = undefined;
                        if(var2) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                        var8 = _closure3_slot0;
                        var3 = var8.getApplicationCommandManager;
                        var3 = var3.bind(var8)();
                        var2 = var6 == var3;
                        var4 = var3;
case 12:
                        if(var2) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                        var3 = var4.setCommand;
                        var2 = {};
                        var8 = _closure2_slot2;
                        var8 = var8.id;
                        var2['channelId'] = var8;
                        var8 = _closure2_slot1;
                        var2['command'] = var8;
                        var8 = _closure2_slot0;
                        var8 = var6 != var8;
                        var6 = null;
                        if(!var8) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var8 = 12;
                        var8 = var10[var8];
                        var9 = var9.bind(var1)(var8);
                        var8 = var9.getApplicationCommandSection;
                        var7 = _closure2_slot0;
                        var6 = var8.bind(var9)(var7);
case 16:
                        var2['section'] = var6;
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var5 = 13;
                        var5 = var7[var5];
                        var5 = var6.bind(var1)(var5);
                        var5 = var5.ApplicationCommandTriggerLocations;
                        var5 = var5.POPULAR_COMMANDS;
                        var2['location'] = var5;
                        var2 = var3.bind(var4)(var2);
case 14:
                        return var1;
                    }
                };
                var2['onSetCommand'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var1['onPress'] = var8;
        var7 = function onLongPress() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.handleLongPressCommandMention;
            var1 = _closure2_slot1;
            var2 = var1.displayName;
            var1 = var1.id;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1['onLongPress'] = var7;
        var6 = var6.commandClickable;
        var1['style'] = var6;
        var6 = var5.displayName;
        var5 = ['/'];
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2 = var4.bind(var7)(var2);
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileAboutMeCardCommand.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();