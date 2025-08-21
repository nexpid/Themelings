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
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/interaction_components/native/actions/SearchableSelectActionComponent.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function SearchableSelectActionComponent(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var8 = arg1;
            var _closure2_slot0 = var8;
            var12 = var8.type;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 3;
            var1 = var3[var1];
            var4 = undefined;
            var2 = var2.bind(var4)(var1);
            var1 = var2.useComponentStateContext;
            var6 = var1.bind(var2)();
            var2 = _closure1_slot1;
            var1 = 4;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var11 = null;
            var2 = var11 == var6;
            var1 = undefined;
            if(var2) { _fun0001_ip = 82; continue _fun0001 }
 76:
            var1 = var6.modal;
 82:
            var2 = var11 != var1;
            var1 = 'SearchableSelectActionComponent must be rendered inside a modal ComponentStateContext';
            var1 = var3.bind(var4)(var2, var1);
            var3 = _closure1_slot4;
            var2 = var3.getChannel;
            var1 = var6.channelId;
            var2 = var2.bind(var3)(var1);
            var3 = var11 == var2;
            var1 = undefined;
            if(var3) { _fun0001_ip = 131; continue _fun0001 }
 126:
            var1 = var2.guild_id;
 131:
            var2 = var11 != var1;
            var10 = null;
            if(!var2) { _fun0001_ip = 143; continue _fun0001 }
 140:
            var10 = var1;
 143:
            var _closure2_slot1 = var10;
            var9 = _closure1_slot3;
            var3 = var9.useMemo;
            var1 = var8.defaultValues;
            var2 = new Array(2);
            var2[0] = var1;
            var2[1] = var10;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.getSnowflakeSelectDefaultValues;
                    var2 = _closure2_slot0;
                    var2 = var2.defaultValues;
                    var1 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2, var1);
                    var2 = null;
                    if(!(var2 == var1)) { _fun0002_ip = 64; continue _fun0002 }
 60:
                    var1 = new Array(0);
 64:
                    return var1;
                }
            };
            var9 = var3.bind(var9)(var1, var2);
            var2 = var6.useComponentState;
            var3 = var9.length;
            var1 = 0;
            var3 = var3 > var1;
            var1 = undefined;
            if(!var3) { _fun0001_ip = 223; continue _fun0001 }
 209:
            var3 = {};
            var3['type'] = var12;
            var3['selectedOptions'] = var9;
            var1 = var3;
 223:
            var2 = var2.bind(var6)(var8, var1);
            var1 = var2.state;
            var12 = var2.visualState;
            var2 = var2.executeStateUpdate;
            var3 = var6.modal;
            var3 = var3.customId;
            var _closure2_slot2 = var3;
            var13 = var11 == var1;
            var14 = undefined;
            if(var13) { _fun0001_ip = 276; continue _fun0001 }
 271:
            var14 = var1.type;
 276:
            var16 = _closure1_slot0;
            var13 = _closure1_slot2;
            var15 = 6;
            var13 = var13[var15];
            var13 = var16.bind(var4)(var13);
            var13 = var13.ComponentType;
            var13 = var13.USER_SELECT;
            if(!(var14 !== var13)) { _fun0001_ip = 456; continue _fun0001 }
 315:
            var13 = var11 == var1;
            var14 = undefined;
            if(var13) { _fun0001_ip = 329; continue _fun0001 }
 324:
            var14 = var1.type;
 329:
            var16 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var15];
            var13 = var16.bind(var4)(var13);
            var13 = var13.ComponentType;
            var13 = var13.ROLE_SELECT;
            if(!(var14 !== var13)) { _fun0001_ip = 456; continue _fun0001 }
 362:
            var13 = var11 == var1;
            var14 = undefined;
            if(var13) { _fun0001_ip = 376; continue _fun0001 }
 371:
            var14 = var1.type;
 376:
            var16 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var15];
            var13 = var16.bind(var4)(var13);
            var13 = var13.ComponentType;
            var13 = var13.MENTIONABLE_SELECT;
            if(!(var14 !== var13)) { _fun0001_ip = 456; continue _fun0001 }
 409:
            var11 = var11 == var1;
            var13 = undefined;
            if(var11) { _fun0001_ip = 423; continue _fun0001 }
 418:
            var13 = var1.type;
 423:
            var14 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var15];
            var11 = var14.bind(var4)(var11);
            var11 = var11.ComponentType;
            var11 = var11.CHANNEL_SELECT;
            if(!(var13 === var11)) { _fun0001_ip = 462; continue _fun0001 }
 456:
            var9 = var1.selectedOptions;
 462:
            var1 = {};
            var6 = var6.channelId;
            var1['channelId'] = var6;
            var1['guildId'] = var10;
            var1['containerId'] = var3;
            var1['onSubmit'] = var2;
            var _closure2_slot3 = var1;
            var3 = _closure1_slot5;
            var2 = _closure1_slot1;
            var11 = _closure1_slot2;
            var1 = 7;
            var1 = var11[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var6 = {};
            var18 = var6;
            var17 = var8;
            var8 = copyDataProperties(var18, var17);
            var8 = 'state';
            var6[var8] = var12;
            var8 = _closure1_slot0;
            var7 = 8;
            var7 = var11[var7];
            var8 = var8.bind(var4)(var7);
            var7 = var8.transformSearchableSelectOptions;
            var8 = var7.bind(var8)(var9, var10);
            var7 = 'selectedOptions';
            var6[var7] = var8;
            var1['model'] = var6;
            var5 = function onTap() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot0;
                    var4 = var1.type;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var5.bind(var1)(var2);
                    var2 = var2.ComponentType;
                    var2 = var2.CHANNEL_SELECT;
                    if(!(var4 !== var2)) { _fun0003_ip = 172; continue _fun0003 }
 53:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var4 = 9;
                    var4 = var2[var4];
                    var8 = var5.bind(var1)(var4);
                    var6 = var8.openLazy;
                    var5 = _closure1_slot0;
                    var4 = 11;
                    var4 = var2[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = 12;
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
                    _fun0003_ip = 289; continue _fun0003;
 172:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var4 = 9;
                    var4 = var2[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.openLazy;
                    var4 = _closure1_slot0;
                    var3 = 11;
                    var3 = var2[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = 10;
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
 289:
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