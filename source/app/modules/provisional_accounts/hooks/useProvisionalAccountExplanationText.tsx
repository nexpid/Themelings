// app/modules/provisional_accounts/hooks/useProvisionalAccountExplanationText.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
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
    var7 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.HelpdeskArticles;
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/provisional_accounts/hooks/useProvisionalAccountExplanationText.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useProvisionalAccountExplanationText(arg1) {
        var2 = arg1;
        var6 = var2.userId;
        var5 = var2.renderApplicationName;
        var _closure2_slot0 = var5;
        var7 = _closure1_slot1;
        var4 = _closure1_slot2;
        var3 = 2;
        var3 = var4[var3];
        var4 = undefined;
        var3 = var7.bind(var4)(var3);
        var6 = var3.bind(var4)(var6);
        var _closure2_slot1 = var6;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = _closure2_slot1;
                var1 = null;
                if(!(var1 == var2)) { _fun0001_ip = 122; continue _fun0001 }
 13:
                var2 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 3;
                var3 = var9[var1];
                var8 = undefined;
                var3 = var2.bind(var8)(var3);
                var4 = var3.intl;
                var3 = var4.format;
                var1 = var9[var1];
                var1 = var2.bind(var8)(var1);
                var1 = var1.t;
                var2 = var1.q+N8Ly;
                var1 = {};
                var7 = _closure1_slot1;
                var6 = 4;
                var6 = var9[var6];
                var7 = var7.bind(var8)(var6);
                var6 = var7.getArticleURL;
                var5 = _closure1_slot4;
                var5 = var5.SLAYER_PROVISIONAL_ACCOUNTS;
                var5 = var6.bind(var7)(var5);
                var1['helpdeskArticle'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                _fun0001_ip = 243; continue _fun0001;
 122:
                var3 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 3;
                var4 = var10[var2];
                var9 = undefined;
                var4 = var3.bind(var9)(var4);
                var5 = var4.intl;
                var4 = var5.format;
                var2 = var10[var2];
                var2 = var3.bind(var9)(var2);
                var2 = var2.t;
                var3 = var2.rSUACQ;
                var2 = {};
                var8 = _closure1_slot1;
                var7 = 4;
                var7 = var10[var7];
                var8 = var8.bind(var9)(var7);
                var7 = var8.getArticleURL;
                var6 = _closure1_slot4;
                var6 = var6.SLAYER_PROVISIONAL_ACCOUNTS;
                var6 = var7.bind(var8)(var6);
                var2['helpdeskArticle'] = var6;
                var6 = function applicationName() {
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var2['applicationName'] = var6;
                var1 = var4.bind(var5)(var3, var2);
 243:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useProvisionalAccountExplanationText'] = var2;
    return var1;
})();