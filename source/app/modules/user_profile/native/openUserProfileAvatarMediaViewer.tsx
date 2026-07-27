// app/modules/user_profile/native/openUserProfileAvatarMediaViewer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AVATAR_MAX_SIZE;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/openUserProfileAvatarMediaViewer.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function openUserProfileAvatarMediaViewer(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var7 = var1.user;
            var6 = var1.guildId;
            var8 = var1.animate;
            var4 = var1.originViewOrOriginLayout;
            var3 = var7.getAvatarURL;
            var2 = _closure1_slot3;
            var1 = _closure1_slot2;
            var1 = var1.useReducedMotion;
            var1 = !var1;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var8;
case 2:
            var7 = var3.bind(var7)(var6, var2, var1);
            var2 = 'string';
            var1 = typeof var7;
            if(!(var2 === var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.openMediaModal;
            var1 = {'initialSources': null, 'originViewOrOriginLayout': null, 'analyticsSource': 'user_profile_avatar', 'openAs': 'action-sheet', 'shareable': false, 'disableDownload': true, 'disableMediaOverlayButton': true, 'disableMediaOverlayFooter': true};
            var6 = {};
            var6['uri'] = var7;
            var7 = 0;
            var6['mediaIndex'] = var7;
            var5 = _closure1_slot3;
            var6['height'] = var5;
            var6['width'] = var5;
            var5 = 'embed';
            var6['accessoryType'] = var5;
            var5 = new Array(1);
            var5[0] = var6;
            var1['initialSources'] = var5;
            var1['originViewOrOriginLayout'] = var4;
            var1 = var2.bind(var3)(var1);
case 4:
            var1 = undefined;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();