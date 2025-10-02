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
            var8 = arg1;
            var _closure2_slot0 = var8;
            var12 = var8.type;
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var2 = 3;
            var2 = var1[var2];
            var4 = undefined;
            var6 = var3.bind(var4)(var2);
            var2 = var6.getSelectPlaceholder;
            var13 = var2.bind(var6)(var8);
            var2 = 4;
            var2 = var1[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useComponentStateContext;
            var11 = var2.bind(var3)();
            var2 = _closure1_slot1;
            var6 = 5;
            var1 = var1[var6];
            var9 = var2.bind(var4)(var1);
            var2 = null;
            var3 = var2 == var11;
            var1 = undefined;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var11.modal;
case 2:
            var3 = var2 != var1;
            var1 = 'SearchableSelectActionComponent must be rendered inside a modal ComponentStateContext';
            var1 = var9.bind(var4)(var3, var1);
            var3 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var6 = var3.bind(var4)(var1);
            var3 = var2 == var11;
            var1 = undefined;
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var11.channelId;
case 4:
            var3 = var2 != var1;
            var1 = 'SearchableSelectActionComponent must be used inside a channel';
            var1 = var6.bind(var4)(var3, var1);
            var6 = _closure1_slot4;
            var3 = var6.getChannel;
            var1 = var11.channelId;
            var3 = var3.bind(var6)(var1);
            var6 = var2 == var3;
            var1 = undefined;
            if(var6) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = var3.guild_id;
case 6:
            var3 = var2 != var1;
            var10 = null;
            if(!var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var10 = var1;
case 8:
            var _closure2_slot1 = var10;
            var9 = _closure1_slot3;
            var6 = var9.useMemo;
            var1 = var8.defaultValues;
            var3 = new Array(2);
            var3[0] = var1;
            var3[1] = var10;
            var1 = function() {
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
            var9 = var6.bind(var9)(var1, var3);
            var3 = var11.useComponentState;
            var1 = var9.length;
            var15 = 0;
            var6 = var1 > var15;
            var1 = undefined;
            if(!var6) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var6 = {};
            var6['type'] = var12;
            var6['selectedOptions'] = var9;
            var1 = var6;
case 12:
            var3 = var3.bind(var11)(var8, var1);
            var1 = var3.state;
            var12 = var3.visualState;
            var3 = var3.executeStateUpdate;
            var6 = var11.modal;
            var6 = var6.customId;
            var _closure2_slot2 = var6;
            var14 = var2 == var1;
            var17 = undefined;
            if(var14) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var17 = var1.type;
case 14:
            var18 = _closure1_slot0;
            var14 = _closure1_slot2;
            var16 = 7;
            var14 = var14[var16];
            var14 = var18.bind(var4)(var14);
            var14 = var14.ComponentType;
            var14 = var14.USER_SELECT;
            if(!(var17 !== var14)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var14 = var2 == var1;
            var17 = undefined;
            if(var14) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var17 = var1.type;
case 18:
            var18 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var16];
            var14 = var18.bind(var4)(var14);
            var14 = var14.ComponentType;
            var14 = var14.ROLE_SELECT;
            if(!(var17 !== var14)) { _fun0001_ip = 16; continue _fun0001 }
case 20:
            var14 = var2 == var1;
            var17 = undefined;
            if(var14) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var17 = var1.type;
case 21:
            var18 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var16];
            var14 = var18.bind(var4)(var14);
            var14 = var14.ComponentType;
            var14 = var14.MENTIONABLE_SELECT;
            if(!(var17 !== var14)) { _fun0001_ip = 16; continue _fun0001 }
case 23:
            var14 = var2 == var1;
            var17 = undefined;
            if(var14) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var17 = var1.type;
case 24:
            var18 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var16];
            var14 = var18.bind(var4)(var14);
            var14 = var14.ComponentType;
            var14 = var14.CHANNEL_SELECT;
            if(!(var17 === var14)) { _fun0001_ip = 26; continue _fun0001 }
case 16:
            var9 = var1.selectedOptions;
case 26:
            var1 = var11.getParents;
            var14 = var1.bind(var11)(var8);
            var17 = var2 == var14;
            var1 = undefined;
            if(var17) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var1 = var14[var15];
case 27:
            var2 = var2 == var1;
            var15 = undefined;
            if(var2) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var15 = var1.type;
case 29:
            var14 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var16];
            var2 = var14.bind(var4)(var2);
            var2 = var2.ComponentType;
            var14 = var2.LABEL;
            var2 = undefined;
            if(!(var15 === var14)) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var2 = var1;
case 31:
            var1 = {};
            var11 = var11.channelId;
            var1['channelId'] = var11;
            var1['guildId'] = var10;
            var1['containerId'] = var6;
            var1['onSubmit'] = var3;
            var1['labelComponent'] = var2;
            var _closure2_slot3 = var1;
            var3 = _closure1_slot5;
            var2 = _closure1_slot1;
            var11 = _closure1_slot2;
            var1 = 8;
            var1 = var11[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var6 = {};
            var20 = var6;
            var19 = var8;
            var8 = copyDataProperties(var20, var19);
            var8 = 'placeholder';
            var6[var8] = var13;
            var8 = 'state';
            var6[var8] = var12;
            var8 = _closure1_slot0;
            var7 = 9;
            var7 = var11[var7];
            var8 = var8.bind(var4)(var7);
            var7 = var8.transformSearchableSelectOptions;
            var8 = var7.bind(var8)(var9, var10);
            var7 = 'selectedOptions';
            var6[var7] = var8;
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