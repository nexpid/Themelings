// app/modules/notifications/settings/native/NotificationSettingsPresets.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function NotificationSettingsPresets(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var1 = _closure1_slot6;
            var5 = undefined;
            var6 = var1.bind(var5)();
            var3 = var2.preset;
            var4 = _closure1_slot0;
            var1 = _closure1_slot1;
            var8 = 4;
            var1 = var1[var8];
            var1 = var4.bind(var5)(var1);
            var1 = var1.Presets;
            var1 = var1.ALL_MESSAGES;
            var13 = 0;
            var9 = 0;
            if(!(var3 !== var1)) { _fun0001_ip = 160; continue _fun0001 }
 68:
            var4 = var2.preset;
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var8];
            var1 = var3.bind(var5)(var1);
            var1 = var1.Presets;
            var3 = var1.MENTIONS;
            var1 = 1;
            if(!(var4 !== var3)) { _fun0001_ip = 157; continue _fun0001 }
 110:
            var11 = var2.preset;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var8];
            var3 = var4.bind(var5)(var3);
            var3 = var3.Presets;
            var4 = var3.NOTHING;
            var3 = undefined;
            if(!(var11 === var4)) { _fun0001_ip = 154; continue _fun0001 }
 151:
            var3 = 2;
 154:
            var1 = var3;
 157:
            var9 = var1;
 160:
            var _closure2_slot1 = var9;
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var4 = 10;
            var4 = var1[var4];
            var12 = var3.bind(var5)(var4);
            var11 = var12.useSegmentedControlState;
            var4 = {};
            var4['pageWidth'] = var13;
            var13 = function onSetActiveIndex(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = arg1;
                    var1 = 0;
                    var1 = var1 === var2;
                    if(!var1) { _fun0002_ip = 66; continue _fun0002 }
 12:
                    var3 = _closure2_slot0;
                    var4 = var3.preset;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var3 = 4;
                    var5 = var5[var3];
                    var3 = undefined;
                    var3 = var6.bind(var3)(var5);
                    var3 = var3.Presets;
                    var3 = var3.ALL_MESSAGES;
                    var1 = var4 !== var3;
 66:
                    if(!var1) { _fun0002_ip = 124; continue _fun0002 }
 69:
                    var4 = _closure2_slot0;
                    var3 = var4.updatePreset;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var1 = 4;
                    var5 = var5[var1];
                    var1 = undefined;
                    var1 = var6.bind(var1)(var5);
                    var1 = var1.Presets;
                    var1 = var1.ALL_MESSAGES;
                    var1 = var3.bind(var4)(var1);
 124:
                    var1 = 1;
                    var1 = var1 === var2;
                    if(!var1) { _fun0002_ip = 188; continue _fun0002 }
 134:
                    var3 = _closure2_slot0;
                    var4 = var3.preset;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var3 = 4;
                    var5 = var5[var3];
                    var3 = undefined;
                    var3 = var6.bind(var3)(var5);
                    var3 = var3.Presets;
                    var3 = var3.MENTIONS;
                    var1 = var4 !== var3;
 188:
                    if(!var1) { _fun0002_ip = 246; continue _fun0002 }
 191:
                    var4 = _closure2_slot0;
                    var3 = var4.updatePreset;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var1 = 4;
                    var5 = var5[var1];
                    var1 = undefined;
                    var1 = var6.bind(var1)(var5);
                    var1 = var1.Presets;
                    var1 = var1.MENTIONS;
                    var1 = var3.bind(var4)(var1);
 246:
                    var1 = 2;
                    var1 = var1 === var2;
                    if(!var1) { _fun0002_ip = 310; continue _fun0002 }
 256:
                    var2 = _closure2_slot0;
                    var3 = var2.preset;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 4;
                    var4 = var4[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var4);
                    var2 = var2.Presets;
                    var2 = var2.NOTHING;
                    var1 = var3 !== var2;
 310:
                    if(!var1) { _fun0002_ip = 368; continue _fun0002 }
 313:
                    var3 = _closure2_slot0;
                    var2 = var3.updatePreset;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var1 = 4;
                    var4 = var4[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4);
                    var1 = var1.Presets;
                    var1 = var1.NOTHING;
                    var1 = var2.bind(var3)(var1);
 368:
                    var1 = undefined;
                    return var1;
                }
            };
            var4['onSetActiveIndex'] = var13;
            var14 = {};
            var15 = 3;
            var13 = var1[var15];
            var13 = var3.bind(var5)(var13);
            var17 = var13.intl;
            var16 = var17.string;
            var13 = var1[var15];
            var13 = var3.bind(var5)(var13);
            var13 = var13.t;
            var13 = var13.hZrr6u;
            var13 = var16.bind(var17)(var13);
            var14['label'] = var13;
            var13 = var1[var8];
            var13 = var3.bind(var5)(var13);
            var13 = var13.Presets;
            var13 = var13.ALL_MESSAGES;
            var14['id'] = var13;
            var17 = _closure1_slot4;
            var13 = 5;
            var13 = var1[var13];
            var13 = var3.bind(var5)(var13);
            var16 = var13.CircleCheckIcon;
            var13 = {};
            var13 = var17.bind(var5)(var16, var13);
            var14['icon'] = var13;
            var16 = null;
            var14['page'] = var16;
            var13 = new Array(3);
            var13[0] = var14;
            var14 = {};
            var17 = var1[var15];
            var17 = var3.bind(var5)(var17);
            var19 = var17.intl;
            var18 = var19.string;
            var17 = var1[var15];
            var17 = var3.bind(var5)(var17);
            var17 = var17.t;
            var17 = var17.y59NJi;
            var17 = var18.bind(var19)(var17);
            var14['label'] = var17;
            var17 = var1[var8];
            var17 = var3.bind(var5)(var17);
            var17 = var17.Presets;
            var17 = var17.MENTIONS;
            var14['id'] = var17;
            var19 = _closure1_slot4;
            var17 = 6;
            var17 = var1[var17];
            var17 = var3.bind(var5)(var17);
            var18 = var17.MagicWandIcon;
            var17 = {};
            var17 = var19.bind(var5)(var18, var17);
            var14['icon'] = var17;
            var14['page'] = var16;
            var13[1] = var14;
            var14 = {};
            var17 = var1[var15];
            var17 = var3.bind(var5)(var17);
            var19 = var17.intl;
            var18 = var19.string;
            var17 = var1[var15];
            var17 = var3.bind(var5)(var17);
            var17 = var17.t;
            var17 = var17.pGn/bG;
            var17 = var18.bind(var19)(var17);
            var14['label'] = var17;
            var17 = var1[var8];
            var17 = var3.bind(var5)(var17);
            var17 = var17.Presets;
            var17 = var17.NOTHING;
            var14['id'] = var17;
            var19 = _closure1_slot4;
            var17 = 7;
            var17 = var1[var17];
            var17 = var3.bind(var5)(var17);
            var18 = var17.BellSlashIcon;
            var17 = {};
            var17 = var19.bind(var5)(var18, var17);
            var14['icon'] = var17;
            var14['page'] = var16;
            var13[2] = var14;
            var4['items'] = var13;
            var4['defaultIndex'] = var9;
            var4 = var11.bind(var12)(var4);
            var _closure2_slot2 = var4;
            var13 = _closure1_slot2;
            var12 = var13.useEffect;
            var11 = new Array(2);
            var11[0] = var9;
            var11[1] = var4;
            var9 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    var2 = var2 == var3;
                    if(var2) { _fun0003_ip = 27; continue _fun0003 }
 16:
                    var4 = _closure2_slot1;
                    var3 = 3;
                    var2 = var4 >= var3;
 27:
                    if(var2) { _fun0003_ip = 49; continue _fun0003 }
 30:
                    var3 = _closure2_slot2;
                    var2 = var3.setActiveIndex;
                    var1 = _closure2_slot1;
                    var1 = var2.bind(var3)(var1);
 49:
                    var1 = undefined;
                    return var1;
                }
            };
            var9 = var12.bind(var13)(var9, var11);
            var2 = var2.preset;
            var1 = var1[var8];
            var1 = var3.bind(var5)(var1);
            var1 = var1.Presets;
            var1 = var1.CUSTOM;
            if(!(var2 !== var1)) { _fun0001_ip = 709; continue _fun0001 }
 652:
            var3 = _closure1_slot4;
            var2 = _closure1_slot0;
            var8 = _closure1_slot1;
            var1 = 13;
            var1 = var8[var1];
            var1 = var2.bind(var5)(var1);
            var2 = var1.SegmentedControl;
            var1 = {};
            var8 = 'experimental_Large';
            var1['variant'] = var8;
            var1['state'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0001_ip = 1075; continue _fun0001;
 709:
            var4 = _closure1_slot5;
            var3 = _closure1_slot3;
            var2 = {};
            var6 = var6.customContainer;
            var2['style'] = var6;
            var9 = _closure1_slot5;
            var8 = _closure1_slot3;
            var6 = {};
            var11 = {'flex': 1, 'marginRight': 8};
            var6['style'] = var11;
            var17 = _closure1_slot4;
            var14 = _closure1_slot0;
            var11 = _closure1_slot1;
            var13 = 11;
            var12 = var11[var13];
            var12 = var14.bind(var5)(var12);
            var16 = var12.Text;
            var12 = {};
            var18 = 'text-sm/semibold';
            var12['variant'] = var18;
            var18 = var11[var15];
            var18 = var14.bind(var5)(var18);
            var20 = var18.intl;
            var19 = var20.string;
            var18 = var11[var15];
            var18 = var14.bind(var5)(var18);
            var18 = var18.t;
            var18 = var18.32yow8;
            var18 = var19.bind(var20)(var18);
            var12['children'] = var18;
            var16 = var17.bind(var5)(var16, var12);
            var12 = new Array(2);
            var12[0] = var16;
            var17 = _closure1_slot4;
            var13 = var11[var13];
            var13 = var14.bind(var5)(var13);
            var16 = var13.Text;
            var13 = {};
            var18 = 'text-xs/medium';
            var13['variant'] = var18;
            var18 = var11[var15];
            var18 = var14.bind(var5)(var18);
            var20 = var18.intl;
            var19 = var20.string;
            var18 = var11[var15];
            var18 = var14.bind(var5)(var18);
            var18 = var18.t;
            var18 = var18.l3doVV;
            var18 = var19.bind(var20)(var18);
            var13['children'] = var18;
            var13 = var17.bind(var5)(var16, var13);
            var12[1] = var13;
            var6['children'] = var12;
            var8 = var9.bind(var5)(var8, var6);
            var6 = new Array(2);
            var6[0] = var8;
            var9 = _closure1_slot4;
            var7 = 12;
            var7 = var11[var7];
            var7 = var14.bind(var5)(var7);
            var8 = var7.Button;
            var7 = {};
            var12 = 'secondary';
            var7['variant'] = var12;
            var12 = var11[var15];
            var12 = var14.bind(var5)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var11[var15];
            var11 = var14.bind(var5)(var11);
            var11 = var11.t;
            var11 = var11.ztO+l5;
            var11 = var12.bind(var13)(var11);
            var7['text'] = var11;
            var10 = function onPress() {
                var4 = _closure2_slot0;
                var3 = var4.updatePreset;
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var5.bind(var1)(var2);
                var2 = var2.Presets;
                var2 = var2.MENTIONS;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var7['onPress'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 1075:
            return var1;
        }
    };
    var _closure1_slot7 = var1;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot4 = var7;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var14 = 8;
    var4 = var6[var14];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var7 = {};
    var10 = {'padding': 16, 'minHeight': 82, 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center'};
    var4 = 16;
    var11 = 9;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var13 = var13 + var14;
    var10['borderRadius'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.REDESIGN_INPUT_CONTROL_ACTIVE_BG;
    var10['backgroundColor'] = var11;
    var7['customContainer'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot6 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/notifications/settings/native/NotificationSettingsPresets.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function NotificationSettingsGuildPresets(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var4 = _closure1_slot4;
        var3 = _closure1_slot7;
        var2 = {};
        var8 = _closure1_slot0;
        var7 = _closure1_slot1;
        var1 = 14;
        var7 = var7[var1];
        var1 = undefined;
        var8 = var8.bind(var1)(var7);
        var7 = var8.useGuildPresetSettings;
        var6 = var6.guildId;
        var6 = var7.bind(var8)(var6);
        var6 = var6.preset;
        var2['preset'] = var6;
        var5 = function updatePreset(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 14;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.updateGuildPreset;
            var1 = _closure2_slot0;
            var2 = var1.guildId;
            var1 = arg1;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var2['updatePreset'] = var5;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var3['NotificationSettingsGuildPresets'] = var4;
    var2 = function NotificationSettingsChannelPresets(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var4 = _closure1_slot4;
        var3 = _closure1_slot7;
        var2 = {};
        var8 = _closure1_slot0;
        var7 = _closure1_slot1;
        var1 = 15;
        var7 = var7[var1];
        var1 = undefined;
        var8 = var8.bind(var1)(var7);
        var7 = var8.useChannelPresetSettings;
        var6 = var6.channel;
        var6 = var7.bind(var8)(var6);
        var6 = var6.preset;
        var2['preset'] = var6;
        var5 = function updatePreset(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 15;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.updateChannelPreset;
            var1 = _closure2_slot0;
            var2 = var1.channel;
            var3 = var2.guild_id;
            var1 = var1.channel;
            var2 = var1.id;
            var1 = arg1;
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
        };
        var2['updatePreset'] = var5;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var3['NotificationSettingsChannelPresets'] = var2;
    return var1;
})();