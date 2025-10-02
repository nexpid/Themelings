// app/modules/user_profile/native/UserProfileGradientContext.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
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
    var8 = var4.bind(var1)(var7);
    var _closure1_slot0 = var8;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot1 = var4;
    var7 = var8.createContext;
    var4 = {'primaryColor': null, 'secondaryColor': null, 'borderPrimaryColor': null, 'borderSecondaryColor': null};
    var4['parentLayout'] = var1;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileGradientContext.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function UserProfileGradientContextProvider(arg1) {
        var4 = arg1;
        var1 = var4.children;
        var2 = null;
        var3 = Object.create(var2);
        var2 = 0;
        var3['children'] = var2;
        var8 = {};
        var7 = var4;
        var6 = var3;
        var5 = copyDataProperties(var8, var7, var6);
        var4 = _closure1_slot1;
        var2 = _closure1_slot2;
        var3 = var2.Provider;
        var2 = {};
        var2['value'] = var5;
        var2['children'] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var3['UserProfileGradientContextProvider'] = var4;
    var2 = function useUserProfileGradientContext() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot0;
            var2 = var3.useContext;
            var1 = _closure1_slot2;
            var1 = var2.bind(var3)(var1);
            var2 = undefined;
            if(!(var2 !== var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            return var1;
case 2:
            var1 = global;
            var3 = var1.Error;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var4 = '[useUserProfileGradientContext] Context is undefined. Are you missing a UserProfileGradientContextProvider?';
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var3['useUserProfileGradientContext'] = var2;
    return var1;
})();