// app/modules/application_commands/native/ApplicationCommandItem.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var10 = var4.AUTOCOMPLETE_ROW_HEIGHT;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'row', 'paddingVertical': 8, 'paddingHorizontal': 16, 'alignItems': 'center'};
    var9['height'] = var10;
    var4['applicationCommandItem'] = var9;
    var9 = {};
    var10 = 6;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.INTERACTIVE_BACKGROUND_HOVER;
    var9['backgroundColor'] = var12;
    var4['highlightedApplicationCommandItem'] = var9;
    var9 = {'width': 32, 'height': 32, 'borderRadius': null, 'marginRight': 16};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.lg;
    var9['borderRadius'] = var10;
    var4['applicationCommandIcon'] = var9;
    var9 = {'flexDirection': 'column', 'flexShrink': 1, 'alignSelf': 'flex-end'};
    var4['applicationCommandDescriptionWrapper'] = var9;
    var9 = {'paddingLeft': 16, 'marginLeft': 'auto'};
    var4['applicationCommandSectionName'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/application_commands/native/ApplicationCommandItem.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var18 = var1.command;
            var8 = var1.onPress;
            var2 = var1.section;
            var _closure2_slot0 = var2;
            var4 = var1.guildId;
            var _closure2_slot1 = var4;
            var7 = var1.showIcon;
            var4 = undefined;
            if(!(var7 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = true;
case 2:
            var13 = var1.highlighted;
            if(!(var13 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var13 = false;
case 4:
            var _closure2_slot2 = var4;
            var1 = _closure1_slot8;
            var10 = var1.bind(var4)();
            var5 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 7;
            var1 = var9[var1];
            var11 = var5.bind(var4)(var1);
            var9 = var11.useStateFromStores;
            var1 = _closure1_slot5;
            var5 = new Array(1);
            var5[0] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var2 = _closure2_slot0;
                    var4 = var3 == var2;
                    var2 = undefined;
                    if(var4) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var4 = _closure2_slot0;
                    var2 = var4.botId;
case 8:
                    if(!(var3 == var2)) { _fun0002_ip = 10; continue _fun0002 }
case 6:
                    var2 = undefined;
                    return var2;
case 10:
                    var4 = _closure1_slot5;
                    var3 = var4.getMember;
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.botId;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var1 = var9.bind(var11)(var5, var1);
            _closure2_slot2 = var1;
            var11 = _closure1_slot3;
            var9 = var11.useMemo;
            var5 = new Array(2);
            var5[0] = var2;
            var5[1] = var1;
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.getApplicationCommandsIconSource;
                var2 = _closure2_slot0;
                var1 = _closure2_slot2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var12 = var9.bind(var11)(var3, var5);
            var5 = null;
            var9 = var5 == var1;
            var3 = undefined;
            if(var9) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var3 = var1.nick;
case 11:
            if(!(var5 == var3)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var3 = var5 == var2;
            var9 = undefined;
            if(var3) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var9 = var2.name;
case 15:
            _fun0001_ip = 17; continue _fun0001;
case 13:
            var9 = var1.nick;
case 17:
            var3 = _closure1_slot7;
            var14 = _closure1_slot0;
            var17 = _closure1_slot2;
            var1 = 9;
            var1 = var17[var1];
            var1 = var14.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {};
            var11 = 10;
            var15 = var17[var11];
            var15 = var14.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.formatToPlainString;
            var11 = var17[var11];
            var11 = var14.bind(var4)(var11);
            var11 = var11.t;
            var14 = var11.eo8b3e;
            var11 = {};
            var11['applicationName'] = var9;
            var17 = var18.displayDescription;
            var11['commandDescription'] = var17;
            var17 = var18.displayName;
            var11['commandName'] = var17;
            var11 = var15.bind(var16)(var14, var11);
            var1['accessibilityLabel'] = var11;
            var11 = {};
            var20 = var10.applicationCommandItem;
            var21 = var11;
            var14 = copyDataProperties(var21, var20);
            if(var13) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var13 = {};
            _fun0001_ip = 20; continue _fun0001;
case 18:
            var13 = var10.highlightedApplicationCommandItem;
case 20:
            var21 = var11;
            var20 = var13;
            var13 = copyDataProperties(var21, var20);
            var1['style'] = var11;
            var11 = 'button';
            var1['accessibilityRole'] = var11;
            var1['onPress'] = var8;
            if(!var7) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var7 = var5 != var12;
case 21:
            if(!var7) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var11 = _closure1_slot6;
            var8 = _closure1_slot1;
            var13 = _closure1_slot2;
            var5 = 11;
            var5 = var13[var5];
            var8 = var8.bind(var4)(var5);
            var5 = {};
            var13 = var10.applicationCommandIcon;
            var5['style'] = var13;
            var5['source'] = var12;
            var7 = var11.bind(var4)(var8, var5);
case 23:
            var5 = new Array(3);
            var5[0] = var7;
            var14 = _closure1_slot7;
            var13 = _closure1_slot4;
            var12 = {};
            var7 = var10.applicationCommandDescriptionWrapper;
            var12['style'] = var7;
            var8 = _closure1_slot6;
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 12;
            var15 = var11[var6];
            var15 = var7.bind(var4)(var15);
            var16 = var15.Text;
            var15 = {'lineClamp': 1, 'variant': 'text-md/semibold', 'color': 'header-primary'};
            var19 = var18.displayName;
            var17 = '/ ';
            var17 = var17 + var19;
            var15['children'] = var17;
            var16 = var8.bind(var4)(var16, var15);
            var15 = new Array(2);
            var15[0] = var16;
            var16 = var11[var6];
            var16 = var7.bind(var4)(var16);
            var17 = var16.Text;
            var16 = {'lineClamp': 1, 'variant': 'text-xs/medium', 'color': 'text-default'};
            var18 = var18.displayDescription;
            var16['children'] = var18;
            var16 = var8.bind(var4)(var17, var16);
            var15[1] = var16;
            var12['children'] = var15;
            var12 = var14.bind(var4)(var13, var12);
            var5[1] = var12;
            var6 = var11[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'style': null, 'variant': 'eyebrow', 'color': 'text-muted'};
            var10 = var10.applicationCommandSectionName;
            var6['style'] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();