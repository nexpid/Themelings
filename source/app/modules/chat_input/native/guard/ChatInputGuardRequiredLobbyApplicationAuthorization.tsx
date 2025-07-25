// app/modules/chat_input/native/guard/ChatInputGuardRequiredLobbyApplicationAuthorization.tsx
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
    var7 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Image;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'height': 40, 'width': 40, 'resizeMode': 'contain'};
    var11 = 4;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.md;
    var10['borderRadius'] = var11;
    var4['icon'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot5 = var4;
    var4 = var7.memo;
    var2 = function ChatInputGuardRequiredLobbyApplicationAuthorization(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.showLinkedLobbyApplicationLoadingIndicator;
            var13 = var1.requiredLinkedLobbyApplication;
            var4 = undefined;
            var _closure2_slot0 = var4;
            var3 = _closure1_slot5;
            var15 = var3.bind(var4)();
            if(var2) { _fun0001_ip = 319; continue _fun0001 }
 40:
            var8 = null;
            if(!(var8 != var13)) { _fun0001_ip = 319; continue _fun0001 }
 49:
            var3 = var13.getIconSource;
            var2 = 80;
            var14 = var3.bind(var13)(var2);
            var6 = var13.connectionEntrypointUrl;
            _closure2_slot0 = var6;
            var5 = _closure1_slot4;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 5;
            var2 = var9[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var9 = 'simple-action';
            var2['type'] = var9;
            var10 = var8 != var14;
            var9 = undefined;
            if(!var10) { _fun0001_ip = 147; continue _fun0001 }
 118:
            var12 = _closure1_slot4;
            var11 = _closure1_slot3;
            var10 = {};
            var15 = var15.icon;
            var10['style'] = var15;
            var10['source'] = var14;
            var9 = var12.bind(var4)(var11, var10);
 147:
            var2['icon'] = var9;
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var14 = 6;
            var11 = var9[var14];
            var11 = var10.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.format;
            var9 = var9[var14];
            var9 = var10.bind(var4)(var9);
            var9 = var9.t;
            var10 = var9.EvDn1N;
            var9 = {};
            var13 = var13.name;
            var9['name'] = var13;
            var9 = var11.bind(var12)(var10, var9);
            var2['message'] = var9;
            var10 = var8 != var6;
            var9 = undefined;
            if(!var10) { _fun0001_ip = 285; continue _fun0001 }
 233:
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var11 = var10[var14];
            var11 = var13.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var10[var14];
            var10 = var13.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.S0W8Z2;
            var9 = var11.bind(var12)(var10);
 285:
            var2['actionLabel'] = var9;
            var8 = var8 != var6;
            var6 = undefined;
            if(!var8) { _fun0001_ip = 306; continue _fun0001 }
 299:
            var6 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.openURLExternally;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
 306:
            var2['actionOnPress'] = var6;
            var2 = var5.bind(var4)(var3, var2);
            return var2;
 319:
            var3 = _closure1_slot4;
            var2 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 5;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {'type': 'simple-action', 'message': ''};
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat_input/native/guard/ChatInputGuardRequiredLobbyApplicationAuthorization.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();