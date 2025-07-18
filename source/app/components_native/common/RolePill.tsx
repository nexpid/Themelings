// app/components_native/common/RolePill.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var12 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot4 = var7;
    var4 = var4.MAX_VISUAL_ROLE_LENGTH;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var10 = 4;
    var4 = var6[var10];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'marginRight': 4, 'marginBottom': 4};
    var11 = 5;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.xs;
    var9['borderRadius'] = var13;
    var4['container'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'paddingHorizontal': 8, 'paddingVertical': 6};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.xs;
    var9['borderRadius'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_TERTIARY;
    var9['backgroundColor'] = var13;
    var4['pill'] = var9;
    var9 = {'marginRight': 8, 'borderRadius': null, 'height': 12, 'width': 12};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var9['borderRadius'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.ICON_MUTED;
    var9['backgroundColor'] = var13;
    var4['bubble'] = var9;
    var9 = {'marginRight': 8, 'borderRadius': null, 'height': 12, 'width': 12};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var9['borderRadius'] = var11;
    var4['verifiedContainer'] = var9;
    var9 = {};
    var9['paddingRight'] = var10;
    var4['roleIcon'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/common/RolePill.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function RolePill(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var21 = var1.role;
            var _closure2_slot0 = var21;
            var19 = var1.guildId;
            var7 = var1.disableInteraction;
            var20 = var1.color;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 6;
            var1 = var3[var1];
            var4 = undefined;
            var1 = var2.bind(var4)(var1);
            var6 = var1.DeveloperMode;
            var1 = var6.useSetting;
            var6 = var1.bind(var6)();
            var1 = 7;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.useRoleIcon;
            var1 = {};
            var1['guildId'] = var19;
            var8 = var21.id;
            var1['roleId'] = var8;
            var13 = 12;
            var1['size'] = var13;
            var16 = var2.bind(var3)(var1);
            var12 = var21.name;
            var _closure2_slot1 = var12;
            var1 = var21.name;
            var2 = var1.length;
            var1 = _closure1_slot5;
            if(!(var2 > var1)) { _fun0001_ip = 203; continue _fun0001 }
 145:
            var8 = var21.name;
            var3 = var8.slice;
            var2 = _closure1_slot5;
            var1 = 0;
            var8 = var3.bind(var8)(var1, var2);
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '';
            var1 = '...';
            var1 = var3.bind(var2)(var8, var1);
            _closure2_slot1 = var1;
            var12 = var1;
 203:
            var10 = null;
            if(!(var10 == var20)) { _fun0001_ip = 215; continue _fun0001 }
 209:
            var20 = var21.colorString;
 215:
            var1 = var21.tags;
            var2 = var10 == var1;
            var8 = undefined;
            if(var2) { _fun0001_ip = 236; continue _fun0001 }
 230:
            var8 = var1.guild_connections;
 236:
            var1 = _closure1_slot8;
            var17 = var1.bind(var4)();
            var3 = _closure1_slot6;
            var2 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 10;
            var1 = var11[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.PressableHighlight;
            var1 = {};
            var6 = !var6;
            if(var6) { _fun0001_ip = 285; continue _fun0001 }
 282:
            var6 = var7;
 285:
            var1['disabled'] = var6;
            var6 = var17.container;
            var1['style'] = var6;
            var5 = function onPress() {
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 8;
                var2 = var5[var1];
                var1 = undefined;
                var7 = var4.bind(var1)(var2);
                var6 = var7.copy;
                var3 = _closure2_slot0;
                var3 = var3.id;
                var3 = var6.bind(var7)(var3);
                var3 = 9;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.roleIdCopied;
                var2 = _closure2_slot1;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1['onPress'] = var5;
            var18 = false;
            var1['accessible'] = var18;
            var7 = _closure1_slot7;
            var6 = _closure1_slot3;
            var5 = {};
            var11 = var17.pill;
            var5['style'] = var11;
            if(!(var4 === var8)) { _fun0001_ip = 397; continue _fun0001 }
 340:
            var14 = _closure1_slot6;
            var11 = _closure1_slot3;
            var8 = {};
            var22 = var17.bubble;
            var15 = new Array(2);
            var15[0] = var22;
            if(!(var10 == var20)) { _fun0001_ip = 372; continue _fun0001 }
 368:
            var22 = {};
            _fun0001_ip = 381; continue _fun0001;
 372:
            var23 = {};
            var23['backgroundColor'] = var20;
            var22 = var23;
 381:
            var15[1] = var22;
            var8['style'] = var15;
            var11 = var14.bind(var4)(var11, var8);
            _fun0001_ip = 490; continue _fun0001;
 397:
            var15 = _closure1_slot6;
            var14 = _closure1_slot1;
            var22 = _closure1_slot2;
            var8 = 11;
            var8 = var22[var8];
            var14 = var14.bind(var4)(var8);
            var8 = {};
            var22 = var17.verifiedContainer;
            var8['style'] = var22;
            var21 = var21.id;
            var8['roleId'] = var21;
            if(!(var10 == var19)) { _fun0001_ip = 451; continue _fun0001 }
 447:
            var19 = _closure1_slot4;
 451:
            var8['guildId'] = var19;
            var21 = var10 != var20;
            var19 = undefined;
            if(!var21) { _fun0001_ip = 467; continue _fun0001 }
 464:
            var19 = var20;
 467:
            var8['roleColor'] = var19;
            var19 = 14;
            var8['size'] = var19;
            var8['displayRoleIcon'] = var18;
            var11 = var15.bind(var4)(var14, var8);
 490:
            var8 = new Array(3);
            var8[0] = var11;
            var11 = var10 != var16;
            var10 = null;
            if(!var11) { _fun0001_ip = 537; continue _fun0001 }
 507:
            var15 = _closure1_slot6;
            var14 = _closure1_slot3;
            var11 = {};
            var17 = var17.roleIcon;
            var11['style'] = var17;
            var11['children'] = var16;
            var10 = var15.bind(var4)(var14, var11);
 537:
            var8[1] = var10;
            var11 = _closure1_slot6;
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var9 = var9[var13];
            var9 = var10.bind(var4)(var9);
            var10 = var9.Text;
            var9 = {'variant': 'text-xs/semibold', 'color': 'interactive-active'};
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[2] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();