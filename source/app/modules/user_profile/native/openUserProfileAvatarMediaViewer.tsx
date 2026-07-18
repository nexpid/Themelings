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
            var4 = var1.guildId;
            var9 = var1.animate;
            var5 = var1.originViewOrOriginLayout;
            var6 = var1.description;
            var3 = var7.getAvatarURL;
            var8 = _closure1_slot3;
            var2 = _closure1_slot2;
            var2 = var2.useReducedMotion;
            var2 = !var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var9;
case 2:
            var9 = var3.bind(var7)(var4, var8, var2);
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.openMediaModal;
            var2 = {'initialSources': null, 'originViewOrOriginLayout': null, 'analyticsSource': 'user_profile_avatar', 'openAs': 'action-sheet', 'shareable': false, 'disableDownload': true, 'disableMediaOverlayButton': true, 'disableMediaOverlayFooter': true};
            var7 = {};
            var7['uri'] = var9;
            var9 = 0;
            var7['mediaIndex'] = var9;
            var7['height'] = var8;
            var7['width'] = var8;
            var7['description'] = var6;
            var6 = 'embed';
            var7['accessoryType'] = var6;
            var6 = new Array(1);
            var6[0] = var7;
            var2['initialSources'] = var6;
            var2['originViewOrOriginLayout'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();