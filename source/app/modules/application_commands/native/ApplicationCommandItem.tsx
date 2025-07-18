// app/modules/application_commands/native/ApplicationCommandItem.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = native4;
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
    var4 = var5.bind(var1)(var4);
    var10 = var4.AUTOCOMPLETE_ROW_HEIGHT;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'row', 'paddingVertical': 8, 'paddingHorizontal': 16, 'alignItems': 'center'};
    var9['height'] = var10;
    var4['applicationCommandItem'] = var9;
    var9 = {};
    var10 = 5;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MODIFIER_HOVER;
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
    var _closure1_slot7 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/application_commands/native/ApplicationCommandItem.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var19 = var2.command;
            var5 = var2.onPress;
            var10 = var2.section;
            var _closure2_slot0 = var10;
            var7 = var2.showIcon;
            var4 = undefined;
            if(!(var7 === var4)) { _fun0001_ip = 39; continue _fun0001 }
 37:
            var7 = true;
 39:
            var12 = var2.highlighted;
            if(!(var12 === var4)) { _fun0001_ip = 51; continue _fun0001 }
 49:
            var12 = false;
 51:
            var2 = _closure1_slot7;
            var11 = var2.bind(var4)();
            var8 = _closure1_slot3;
            var3 = var8.useMemo;
            var2 = new Array(1);
            var2[0] = var10;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getApplicationCommandsIconSource;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var13 = var3.bind(var8)(var1, var2);
            var3 = _closure1_slot6;
            var9 = _closure1_slot0;
            var14 = _closure1_slot2;
            var1 = 7;
            var1 = var14[var1];
            var1 = var9.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {};
            var8 = 8;
            var15 = var14[var8];
            var15 = var9.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.formatToPlainString;
            var8 = var14[var8];
            var8 = var9.bind(var4)(var8);
            var8 = var8.t;
            var14 = var8.eo8b3d;
            var8 = {};
            var9 = null;
            var18 = var9 == var10;
            var17 = undefined;
            if(var18) { _fun0001_ip = 186; continue _fun0001 }
 181:
            var17 = var10.name;
 186:
            var8['applicationName'] = var17;
            var17 = var19.displayDescription;
            var8['commandDescription'] = var17;
            var17 = var19.displayName;
            var8['commandName'] = var17;
            var8 = var15.bind(var16)(var14, var8);
            var1['accessibilityLabel'] = var8;
            var8 = {};
            var21 = var11.applicationCommandItem;
            var22 = var8;
            var14 = copyDataProperties(var22, var21);
            if(var12) { _fun0001_ip = 246; continue _fun0001 }
 242:
            var12 = {};
            _fun0001_ip = 252; continue _fun0001;
 246:
            var12 = var11.highlightedApplicationCommandItem;
 252:
            var22 = var8;
            var21 = var12;
            var12 = copyDataProperties(var22, var21);
            var1['style'] = var8;
            var8 = 'button';
            var1['accessibilityRole'] = var8;
            var1['onPress'] = var5;
            if(!var7) { _fun0001_ip = 285; continue _fun0001 }
 281:
            var7 = var9 != var13;
 285:
            if(!var7) { _fun0001_ip = 334; continue _fun0001 }
 288:
            var12 = _closure1_slot5;
            var8 = _closure1_slot1;
            var14 = _closure1_slot2;
            var5 = 9;
            var5 = var14[var5];
            var8 = var8.bind(var4)(var5);
            var5 = {};
            var14 = var11.applicationCommandIcon;
            var5['style'] = var14;
            var5['source'] = var13;
            var7 = var12.bind(var4)(var8, var5);
 334:
            var5 = new Array(3);
            var5[0] = var7;
            var15 = _closure1_slot6;
            var14 = _closure1_slot4;
            var13 = {};
            var7 = var11.applicationCommandDescriptionWrapper;
            var13['style'] = var7;
            var8 = _closure1_slot5;
            var7 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 10;
            var16 = var12[var6];
            var16 = var7.bind(var4)(var16);
            var17 = var16.Text;
            var16 = {'lineClamp': 1, 'variant': 'text-md/semibold', 'color': 'header-primary'};
            var20 = var19.displayName;
            var18 = '/ ';
            var18 = var18 + var20;
            var16['children'] = var18;
            var17 = var8.bind(var4)(var17, var16);
            var16 = new Array(2);
            var16[0] = var17;
            var17 = var12[var6];
            var17 = var7.bind(var4)(var17);
            var18 = var17.Text;
            var17 = {'lineClamp': 1, 'variant': 'text-xs/medium', 'color': 'header-secondary'};
            var19 = var19.displayDescription;
            var17['children'] = var19;
            var17 = var8.bind(var4)(var18, var17);
            var16[1] = var17;
            var13['children'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var5[1] = var13;
            var6 = var12[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'style': null, 'variant': 'eyebrow', 'color': 'text-muted'};
            var11 = var11.applicationCommandSectionName;
            var6['style'] = var11;
            var11 = var9 == var10;
            var9 = undefined;
            if(var11) { _fun0001_ip = 554; continue _fun0001 }
 549:
            var9 = var10.name;
 554:
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