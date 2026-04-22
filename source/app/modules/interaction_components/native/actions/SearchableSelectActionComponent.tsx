// app/modules/interaction_components/native/actions/SearchableSelectActionComponent.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/interaction_components/native/actions/SearchableSelectActionComponent.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function SearchableSelectActionComponent(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var _closure2_slot0 = var7;
            var12 = var7.type;
            var8 = _closure1_slot0;
            var2 = _closure1_slot2;
            var3 = 3;
            var6 = var2[var3];
            var4 = undefined;
            var9 = var8.bind(var4)(var6);
            var6 = var9.getSelectPlaceholder;
            var13 = var6.bind(var9)(var7);
            var6 = 4;
            var6 = var2[var6];
            var8 = var8.bind(var4)(var6);
            var6 = var8.useComponentStateContext;
            var14 = var6.bind(var8)();
            var6 = _closure1_slot1;
            var9 = 5;
            var2 = var2[var9];
            var10 = var6.bind(var4)(var2);
            var6 = null;
            var8 = var6 == var14;
            var2 = undefined;
            if(var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var14.modal;
case 2:
            var8 = var6 != var2;
            var2 = 'SearchableSelectActionComponent must be rendered inside a modal ComponentStateContext';
            var2 = var10.bind(var4)(var8, var2);
            var8 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var9];
            var9 = var8.bind(var4)(var2);
            var8 = var6 == var14;
            var2 = undefined;
            if(var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var14.channelId;
case 4:
            var8 = var6 != var2;
            var2 = 'SearchableSelectActionComponent must be used inside a channel';
            var2 = var9.bind(var4)(var8, var2);
            var9 = _closure1_slot4;
            var8 = var9.getChannel;
            var2 = var14.channelId;
            var8 = var8.bind(var9)(var2);
            var9 = var6 == var8;
            var2 = undefined;
            if(var9) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var8.guild_id;
case 6:
            var8 = var6 != var2;
            var10 = null;
            if(!var8) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var10 = var2;
case 8:
            var _closure2_slot1 = var10;
            var11 = _closure1_slot3;
            var9 = var11.useMemo;
            var2 = var7.defaultValues;
            var8 = new Array(2);
            var8[0] = var2;
            var8[1] = var10;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.getSnowflakeSelectDefaultValues;
                    var2 = _closure2_slot0;
                    var2 = var2.defaultValues;
                    var1 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2, var1);
                    var2 = null;
                    if(!(var2 == var1)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var1 = new Array(0);
case 10:
                    return var1;
                }
            };
            var9 = var9.bind(var11)(var2, var8);
            var8 = var14.useComponentState;
            var2 = var9.length;
            var16 = 0;
            var11 = var2 > var16;
            var2 = undefined;
            if(!var11) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var11 = {};
            var11['type'] = var12;
            var11['selectedOptions'] = var9;
            var2 = var11;
case 12:
            var8 = var8.bind(var14)(var7, var2);
            var2 = var8.state;
            var12 = var8.visualState;
            var8 = var8.executeStateUpdate;
            var11 = var14.modal;
            var11 = var11.customId;
            var _closure2_slot2 = var11;
            var15 = var6 == var2;
            var18 = undefined;
            if(var15) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var18 = var2.type;
case 14:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var17 = 7;
            var15 = var15[var17];
            var15 = var19.bind(var4)(var15);
            var15 = var15.ComponentType;
            var15 = var15.USER_SELECT;
            if(!(var18 !== var15)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var15 = var6 == var2;
            var18 = undefined;
            if(var15) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var18 = var2.type;
case 18:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var17];
            var15 = var19.bind(var4)(var15);
            var15 = var15.ComponentType;
            var15 = var15.ROLE_SELECT;
            if(!(var18 !== var15)) { _fun0001_ip = 16; continue _fun0001 }
case 20:
            var15 = var6 == var2;
            var18 = undefined;
            if(var15) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var18 = var2.type;
case 21:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var17];
            var15 = var19.bind(var4)(var15);
            var15 = var15.ComponentType;
            var15 = var15.MENTIONABLE_SELECT;
            if(!(var18 !== var15)) { _fun0001_ip = 16; continue _fun0001 }
case 23:
            var15 = var6 == var2;
            var18 = undefined;
            if(var15) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var18 = var2.type;
case 24:
            var19 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var17];
            var15 = var19.bind(var4)(var15);
            var15 = var15.ComponentType;
            var15 = var15.CHANNEL_SELECT;
            if(!(var18 === var15)) { _fun0001_ip = 26; continue _fun0001 }
case 16:
            var9 = var2.selectedOptions;
case 26:
            var2 = var14.getParents;
            var15 = var2.bind(var14)(var7);
            var18 = var6 == var15;
            var2 = undefined;
            if(var18) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var2 = var15[var16];
case 27:
            var6 = var6 == var2;
            var16 = undefined;
            if(var6) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var16 = var2.type;
case 29:
            var15 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var17];
            var6 = var15.bind(var4)(var6);
            var6 = var6.ComponentType;
            var15 = var6.LABEL;
            var6 = undefined;
            if(!(var16 === var15)) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var6 = var2;
case 31:
            var2 = {};
            var14 = var14.channelId;
            var2['channelId'] = var14;
            var2['guildId'] = var10;
            var2['containerId'] = var11;
            var2['onSubmit'] = var8;
            var2['labelComponent'] = var6;
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = var11[var3];
            var14 = var8.bind(var4)(var3);
            var6 = var14.canSelectBeEmpty;
            var3 = 'modal';
            var3 = var6.bind(var14)(var7, var3);
            var2['allowEmpty'] = var3;
            var _closure2_slot3 = var2;
            var3 = _closure1_slot5;
            var2 = _closure1_slot1;
            var1 = 8;
            var1 = var11[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var6 = {};
            var21 = var6;
            var20 = var7;
            var7 = copyDataProperties(var21, var20);
            var7 = 'placeholder';
            var6[6] = var13;
            var7 = 'state';
            var6[6] = var12;
            var7 = 9;
            var7 = var11[var7];
            var8 = var8.bind(var4)(var7);
            var7 = var8.transformSearchableSelectOptions;
            var8 = var7.bind(var8)(var9, var10);
            var7 = 'selectedOptions';
            var6[6] = var8;
            var1['model'] = var6;
            var5 = function onTap() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var4 = var1.type;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var5.bind(var1)(var2);
                    var2 = var2.ComponentType;
                    var2 = var2.CHANNEL_SELECT;
                    if(!(var4 !== var2)) { _fun0003_ip = 33; continue _fun0003 }
case 34:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var4 = 10;
                    var4 = var2[var4];
                    var8 = var5.bind(var1)(var4);
                    var6 = var8.openLazy;
                    var5 = _closure1_slot0;
                    var4 = 12;
                    var4 = var2[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = 13;
                    var4 = var2[var4];
                    var2 = var2.paths;
                    var5 = var5.bind(var1)(var4, var2);
                    var9 = _closure2_slot2;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var4 = var2.concat;
                    var2 = 'MentionableSelectComponentActionSheet:';
                    var4 = var4.bind(var2)(var9);
                    var2 = {};
                    var9 = _closure2_slot0;
                    var2['selectionActionComponent'] = var9;
                    var11 = _closure2_slot3;
                    var12 = var2;
                    var9 = copyDataProperties(var12, var11);
                    var2 = var6.bind(var8)(var5, var4, var2);
                    _fun0003_ip = 35; continue _fun0003;
case 33:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var4 = 10;
                    var4 = var2[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.openLazy;
                    var4 = _closure1_slot0;
                    var3 = 12;
                    var3 = var2[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = 11;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var4 = var4.bind(var1)(var3, var2);
                    var8 = _closure2_slot2;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var3 = var2.concat;
                    var2 = 'ChannelSelectComponentActionSheet:';
                    var3 = var3.bind(var2)(var8);
                    var2 = {};
                    var8 = _closure2_slot0;
                    var2['selectionActionComponent'] = var8;
                    var11 = _closure2_slot3;
                    var12 = var2;
                    var7 = copyDataProperties(var12, var11);
                    var2 = var5.bind(var6)(var4, var3, var2);
case 35:
                    return var1;
                }
            };
            var1['onTap'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();