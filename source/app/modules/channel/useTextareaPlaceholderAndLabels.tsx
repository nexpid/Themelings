// app/modules/channel/useTextareaPlaceholderAndLabels.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.ChannelTypes;
    var _closure1_slot3 = var7;
    var4 = var4.ChannelTypesSets;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel/useTextareaPlaceholderAndLabels.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useTextareaPlaceholderAndLabels(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var1 = var3.channel;
            var2 = var3.isReadonly;
            var7 = undefined;
            if(!(var2 === var7)) { _fun0001_ip = 22; continue _fun0001 }
 20:
            var2 = false;
 22:
            var4 = var3.isCreatingThread;
            if(!(var4 === var7)) { _fun0001_ip = 34; continue _fun0001 }
 32:
            var4 = false;
 34:
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 1;
            var9 = var8[var5];
            var10 = var6.bind(var7)(var9);
            var9 = true;
            var13 = var10.bind(var7)(var1, var9);
            var5 = var8[var5];
            var6 = var6.bind(var7)(var5);
            var5 = false;
            var9 = var6.bind(var7)(var1, var5);
            var5 = null;
            if(!(var5 != var1)) { _fun0001_ip = 943; continue _fun0001 }
 91:
            if(!(var5 != var13)) { _fun0001_ip = 943; continue _fun0001 }
 98:
            if(var4) { _fun0001_ip = 828; continue _fun0001 }
 104:
            if(var2) { _fun0001_ip = 713; continue _fun0001 }
 110:
            var2 = var1.isForumPost;
            var2 = var2.bind(var1)();
            if(var2) { _fun0001_ip = 580; continue _fun0001 }
 126:
            var2 = _closure1_slot4;
            var5 = var2.THREADS;
            var4 = var5.has;
            var2 = var1.type;
            var2 = var4.bind(var5)(var2);
            if(var2) { _fun0001_ip = 446; continue _fun0001 }
 157:
            var2 = var1.type;
            var1 = _closure1_slot3;
            var1 = var1.DM;
            if(!(var2 !== var1)) { _fun0001_ip = 310; continue _fun0001 }
 179:
            var1 = {};
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 2;
            var5 = var8[var2];
            var5 = var4.bind(var7)(var5);
            var11 = var5.intl;
            var10 = var11.formatToPlainString;
            var5 = var8[var2];
            var5 = var4.bind(var7)(var5);
            var5 = var5.t;
            var6 = var5.8lzR/f;
            var5 = {};
            var5['channel'] = var13;
            var5 = var10.bind(var11)(var6, var5);
            var1['placeholder'] = var5;
            var5 = var8[var2];
            var5 = var4.bind(var7)(var5);
            var6 = var5.intl;
            var5 = var6.formatToPlainString;
            var2 = var8[var2];
            var2 = var4.bind(var7)(var2);
            var2 = var2.t;
            var4 = var2.ih7ZSE;
            var2 = {};
            var2['channel'] = var9;
            var2 = var5.bind(var6)(var4, var2);
            var1['accessibilityLabel'] = var2;
            _fun0001_ip = 441; continue _fun0001;
 310:
            var2 = {};
            var5 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 2;
            var6 = var10[var4];
            var6 = var5.bind(var7)(var6);
            var12 = var6.intl;
            var11 = var12.formatToPlainString;
            var6 = var10[var4];
            var6 = var5.bind(var7)(var6);
            var6 = var6.t;
            var8 = var6.4c+CAw;
            var6 = {};
            var6['channel'] = var13;
            var6 = var11.bind(var12)(var8, var6);
            var2['placeholder'] = var6;
            var6 = var10[var4];
            var6 = var5.bind(var7)(var6);
            var8 = var6.intl;
            var6 = var8.formatToPlainString;
            var4 = var10[var4];
            var4 = var5.bind(var7)(var4);
            var4 = var4.t;
            var5 = var4.fqOxbW;
            var4 = {};
            var4['channel'] = var9;
            var4 = var6.bind(var8)(var5, var4);
            var2['accessibilityLabel'] = var4;
            var1 = var2;
 441:
            _fun0001_ip = 575; continue _fun0001;
 446:
            var2 = {};
            var5 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 2;
            var6 = var10[var4];
            var6 = var5.bind(var7)(var6);
            var12 = var6.intl;
            var11 = var12.formatToPlainString;
            var6 = var10[var4];
            var6 = var5.bind(var7)(var6);
            var6 = var6.t;
            var8 = var6.8lzR/f;
            var6 = {};
            var6['channel'] = var13;
            var6 = var11.bind(var12)(var8, var6);
            var2['placeholder'] = var6;
            var6 = var10[var4];
            var6 = var5.bind(var7)(var6);
            var8 = var6.intl;
            var6 = var8.formatToPlainString;
            var4 = var10[var4];
            var4 = var5.bind(var7)(var4);
            var4 = var4.t;
            var5 = var4.UZIMWV;
            var4 = {};
            var4['channel'] = var9;
            var4 = var6.bind(var8)(var5, var4);
            var2['accessibilityLabel'] = var4;
            var1 = var2;
 575:
            _fun0001_ip = 711; continue _fun0001;
 580:
            var2 = {};
            var5 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 2;
            var6 = var10[var4];
            var6 = var5.bind(var7)(var6);
            var12 = var6.intl;
            var11 = var12.formatToPlainString;
            var6 = var10[var4];
            var6 = var5.bind(var7)(var6);
            var6 = var6.t;
            var8 = var6.Y6qWLS;
            var6 = {};
            var6['channel'] = var13;
            var6 = var11.bind(var12)(var8, var6);
            var2['placeholder'] = var6;
            var6 = var10[var4];
            var6 = var5.bind(var7)(var6);
            var8 = var6.intl;
            var6 = var8.formatToPlainString;
            var4 = var10[var4];
            var4 = var5.bind(var7)(var4);
            var4 = var4.t;
            var5 = var4.KffKoa;
            var4 = {};
            var4['channel'] = var9;
            var4 = var6.bind(var8)(var5, var4);
            var2['accessibilityLabel'] = var4;
            var1 = var2;
 711:
            _fun0001_ip = 826; continue _fun0001;
 713:
            var2 = {};
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 2;
            var5 = var9[var4];
            var5 = var8.bind(var7)(var5);
            var10 = var5.intl;
            var6 = var10.string;
            var5 = var9[var4];
            var5 = var8.bind(var7)(var5);
            var5 = var5.t;
            var5 = var5.RRvRp6;
            var5 = var6.bind(var10)(var5);
            var2['placeholder'] = var5;
            var5 = var9[var4];
            var5 = var8.bind(var7)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var4 = var9[var4];
            var4 = var8.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4.RRvRp6;
            var4 = var5.bind(var6)(var4);
            var2['accessibilityLabel'] = var4;
            var1 = var2;
 826:
            _fun0001_ip = 941; continue _fun0001;
 828:
            var2 = {};
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 2;
            var5 = var9[var4];
            var5 = var8.bind(var7)(var5);
            var10 = var5.intl;
            var6 = var10.string;
            var5 = var9[var4];
            var5 = var8.bind(var7)(var5);
            var5 = var5.t;
            var5 = var5.YzpScX;
            var5 = var6.bind(var10)(var5);
            var2['placeholder'] = var5;
            var5 = var9[var4];
            var5 = var8.bind(var7)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var4 = var9[var4];
            var4 = var8.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4.YzpScX;
            var4 = var5.bind(var6)(var4);
            var2['accessibilityLabel'] = var4;
            var1 = var2;
 941:
            _fun0001_ip = 1056; continue _fun0001;
 943:
            var2 = {};
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 2;
            var4 = var8[var3];
            var4 = var6.bind(var7)(var4);
            var9 = var4.intl;
            var5 = var9.string;
            var4 = var8[var3];
            var4 = var6.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4.MKDeyM;
            var4 = var5.bind(var9)(var4);
            var2['placeholder'] = var4;
            var4 = var8[var3];
            var4 = var6.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var6.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.MKDeyM;
            var3 = var4.bind(var5)(var3);
            var2['accessibilityLabel'] = var3;
            var1 = var2;
 1056:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();