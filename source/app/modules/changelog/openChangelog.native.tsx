// app/modules/changelog/openChangelog.native.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.CHANGELOG_MODAL_KEY;
    var _closure1_slot3 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/changelog/openChangelog.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function openChangelog() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arguments[0];
            var1 = undefined;
            if(!(var2 === var1)) { _fun0001_ip = 11; continue _fun0001 }
 9:
            var2 = false;
 11:
            var2 = !var2;
            if(!var2) { _fun0001_ip = 50; continue _fun0001 }
 17:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 1;
            var3 = var5[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.isModalOpen;
            var2 = var3.bind(var4)();
 50:
            if(var2) { _fun0001_ip = 129; continue _fun0001 }
 53:
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var4 = 2;
            var4 = var3[var4];
            var6 = var5.bind(var1)(var4);
            var5 = var6.pushLazy;
            var7 = _closure1_slot0;
            var4 = 4;
            var4 = var3[var4];
            var7 = var7.bind(var1)(var4);
            var4 = 3;
            var4 = var3[var4];
            var3 = var3.paths;
            var4 = var7.bind(var1)(var4, var3);
            var3 = _closure1_slot3;
            var2 = {};
            var2 = var5.bind(var6)(var4, var2, var3);
 129:
            return var1;
        }
    };
    var3['openChangelog'] = var2;
    return var1;
})();