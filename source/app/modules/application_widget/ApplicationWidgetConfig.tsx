// app/modules/application_widget/ApplicationWidgetConfig.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function createExperiment(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.createApexExperiment;
        var1 = {};
        var4 = arg1;
        var1['name'] = var4;
        var4 = 'user';
        var1['kind'] = var4;
        var4 = {};
        var6 = {};
        var5 = false;
        var6['enabled'] = var5;
        var4[0] = var6;
        var6 = {};
        var7 = true;
        var6['enabled'] = var7;
        var4[1] = var6;
        var1['variations'] = var4;
        var4 = {};
        var4['enabled'] = var5;
        var1['defaultConfig'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot4 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = function ApplicationWidgetConfig(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = arg1;
                var3 = this;
                var6 = _closure1_slot2;
                var4 = _closure2_slot0;
                var1 = undefined;
                var4 = var6.bind(var1)(var3, var4);
                var4 = var2.application_id;
                var3['applicationId'] = var4;
                var4 = var2.widget_template_id;
                var3['widgetTemplateId'] = var4;
                var6 = _closure1_slot4;
                var4 = var2.view_experiment;
                var4 = var6.bind(var1)(var4);
                var3['viewExperiment'] = var4;
                var4 = var2.edit_experiment;
                var4 = var6.bind(var1)(var4);
                var3['editExperiment'] = var4;
                var6 = var2.coachmark_experiment;
                var4 = null;
                var6 = var4 != var6;
                var4 = undefined;
                if(!var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var6 = _closure1_slot4;
                var5 = var2.coachmark_experiment;
                var4 = var6.bind(var1)(var5);
case 2:
                var3['coachmarkExperiment'] = var4;
                var4 = var2.edit_profile_upsell_image;
                var3['editProfileUpsellImage'] = var4;
                var4 = var2.hero_placeholder_image;
                var3['heroPlaceholderImage'] = var4;
                var4 = var2.mini_preview_image;
                var3['miniPreviewImage'] = var4;
                var4 = var2.edit_profile_unlinked_dc;
                var3['editProfileUnlinkedDc'] = var4;
                var4 = var2.edit_profile_linked_dc;
                var3['editProfileLinkedDc'] = var4;
                var2 = var2.suggested_widget_linked_dc;
                var3['suggestedWidgetLinkedDc'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'isEligibleForEditProfileUpsell';
        var1['key'] = var2;
        var2 = function value() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = this;
                var1 = var2.editProfileLinkedDc;
                var3 = null;
                var1 = var3 != var1;
                if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var2 = var2.editProfileUnlinkedDc;
                var1 = var3 != var2;
case 4:
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(2);
        var2[0] = var1;
        var1 = {};
        var6 = 'isEligibleForSuggestions';
        var1['key'] = var6;
        var5 = function value() {
            var1 = this;
            var2 = var1.suggestedWidgetLinkedDc;
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var1['value'] = var5;
        var2[1] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/application_widget/ApplicationWidgetConfig.tsx';
    var4 = var5.bind(var6)(var4);
    var3['ApplicationWidgetConfig'] = var2;
    return var1;
})();