(function (thisObj) {
    var handleLength = 1;
    var nameScheme = "First Board Name";
    var makeSectionsBtn;
    var makeSectionsHandleDrpdwn;
    sectionMakerPanel(thisObj);
    function sectionMakerPanel(thisObj) {
        var animaticMater = (thisObj instanceof Panel) ? thisObj : new Window('palette', 'Animatic Maker', undefined, {resizeable: true});
        // Script UI Panel
        /*
    Code for Import https://scriptui.joonas.me — (Triple click to select): 
    {"activeId":0,"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":"animaticMater","windowType":"Palette","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":true,"resizeable":true},"text":"Animatic Maker","preferredSize":[320,320],"margins":16,"orientation":"column","spacing":10,"alignChildren":["left","top"]}},"item-1":{"id":1,"type":"Group","parentId":0,"style":{"enabled":true,"varName":"makeSectionsGroup","preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-2":{"id":2,"type":"StaticText","parentId":1,"style":{"enabled":true,"varName":"makeSectionsLabel","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Sections","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":""}},"item-3":{"id":3,"type":"Button","parentId":4,"style":{"enabled":true,"varName":"makeSectionsButton","text":"Make Sections","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-4":{"id":4,"type":"Group","parentId":1,"style":{"enabled":true,"varName":"makeSectionsButtonGroup","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-6":{"id":6,"type":"Group","parentId":1,"style":{"enabled":true,"varName":"makeSectionsHandlesGroup","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-7":{"id":7,"type":"StaticText","parentId":6,"style":{"enabled":true,"varName":"makeSectionsHandlesLabel","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Handle Length","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-9":{"id":9,"type":"DropDownList","parentId":6,"style":{"enabled":true,"varName":"makeSectionsHandleValue","text":"DropDownList","listItems":"0s, 0.5s, 1s, 2s","preferredSize":[0,0],"alignment":null,"selection":0,"helpTip":"Handle Length in Seconds"}},"item-10":{"id":10,"type":"Divider","parentId":1,"style":{"enabled":true,"varName":"visualDivider"}},"item-11":{"id":11,"type":"Group","parentId":1,"style":{"enabled":true,"varName":"makeSectionsNamingGroup","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-12":{"id":12,"type":"StaticText","parentId":11,"style":{"enabled":true,"varName":"makeSectionsNamingLabel","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Section Naming","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-13":{"id":13,"type":"DropDownList","parentId":11,"style":{"enabled":true,"varName":"makeSectionsNamingValue","text":"DropDownList","listItems":"First Board Name, First/Last Joined, Last Board Name","preferredSize":[0,0],"alignment":null,"selection":0,"helpTip":null}}},"order":[0,1,2,10,6,7,9,11,12,13,4,3],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":false,"itemReferenceList":"None"}}
    */

// ANIMATICMATER
// =============
        animaticMater.preferredSize.width = 320;
        animaticMater.orientation = "column";
        animaticMater.alignChildren = ["left","top"];
        animaticMater.spacing = 10;
        animaticMater.margins = 16;

// MAKESECTIONSGROUP
// =================
        var makeSectionsGroup = animaticMater.add("group", undefined, {name: "makeSectionsGroup"});
        makeSectionsGroup.orientation = "column";
        makeSectionsGroup.alignChildren = ["left","center"];
        makeSectionsGroup.spacing = 10;
        makeSectionsGroup.margins = 0;

        var makeSectionsLabel = makeSectionsGroup.add("statictext", undefined, undefined, {name: "makeSectionsLabel"});
        makeSectionsLabel.text = "Sections";

        var visualDivider = makeSectionsGroup.add("panel", undefined, undefined, {name: "visualDivider"});
        visualDivider.alignment = "fill";

// MAKESECTIONSHANDLESGROUP
// ========================
        var makeSectionsHandlesGroup = makeSectionsGroup.add("group", undefined, {name: "makeSectionsHandlesGroup"});
        makeSectionsHandlesGroup.orientation = "row";
        makeSectionsHandlesGroup.alignChildren = ["left","center"];
        makeSectionsHandlesGroup.spacing = 10;
        makeSectionsHandlesGroup.margins = 0;

        var makeSectionsHandlesLabel = makeSectionsHandlesGroup.add("statictext", undefined, undefined, {name: "makeSectionsHandlesLabel"});
        makeSectionsHandlesLabel.text = "Handle Length";

        var makeSectionsHandleValue_array = ["0s","0.5s","1s","1.5s","2s"];
        var makeSectionsHandleDrpdwn = makeSectionsHandlesGroup.add("dropdownlist", undefined, undefined, {name: "makeSectionsHandleValue", items: makeSectionsHandleValue_array});
        makeSectionsHandleDrpdwn.helpTip = "Handle Length in Seconds";
        makeSectionsHandleDrpdwn.selection = 2;

// MAKESECTIONSNAMINGGROUP
// =======================
        var makeSectionsNamingGroup = makeSectionsGroup.add("group", undefined, {name: "makeSectionsNamingGroup"});
        makeSectionsNamingGroup.orientation = "row";
        makeSectionsNamingGroup.alignChildren = ["left","center"];
        makeSectionsNamingGroup.spacing = 10;
        makeSectionsNamingGroup.margins = 0;

        var makeSectionsNamingLabel = makeSectionsNamingGroup.add("statictext", undefined, undefined, {name: "makeSectionsNamingLabel"});
        makeSectionsNamingLabel.text = "Section Naming";

        var makeSectionsNamingValue_array = ["First Board Name","First/Last Joined","Last Board Name"];
        var makeSectionsNamingValue = makeSectionsNamingGroup.add("dropdownlist", undefined, undefined, {name: "makeSectionsNamingValue", items: makeSectionsNamingValue_array});
        makeSectionsNamingValue.selection = 0;

// MAKESECTIONSBUTTONGROUP
// =======================
        var makeSectionsButtonGroup = makeSectionsGroup.add("group", undefined, {name: "makeSectionsButtonGroup"});
        makeSectionsButtonGroup.orientation = "row";
        makeSectionsButtonGroup.alignChildren = ["left","center"];
        makeSectionsButtonGroup.spacing = 10;
        makeSectionsButtonGroup.margins = 0;

        var makeSectionsBtn = makeSectionsButtonGroup.add("button", undefined, undefined, {name: "makeSectionsButton"});
        makeSectionsBtn.text = "Make Sections";

        // --- ACTIONS ---
        makeSectionsBtn.onClick = function () {
            handleLength = parseFloat(makeSectionsHandleDrpdwn.selection.text.split("s")[0]);
            nameScheme = makeSectionsNamingValue.selection.text;
            makeSections(handleLength, nameScheme);
        };
        
        
        
        animaticMater.onResizing = animaticMater.onResize = function () {
            this.layout.resize();
        };
        animaticMater instanceof Window
            ? (animaticMater.center(), animaticMater.show()) : (animaticMater.layout.layout(true), animaticMater.layout.resize());
    }

    // Function to make the sections from the active composition
    function makeSections(handleLength, nameScheme) {
        app.beginUndoGroup("Section Maker");
        // Get the active composition
        var activeComp = app.project.activeItem;
        // Check if there is an active composition
        if (activeComp && activeComp instanceof CompItem) {
            // Check that layers are in the correct order
            checkLayerOrder();

            // Store layer indices based on their label color
            var layerIndicesByLabel = {};

            // Iterate over all layers in the composition to group by label color
            for (var i = activeComp.numLayers; i >= 1; i--) {
                var layer = activeComp.layer(i);

                // Check if the layer has a label color
                if (layer.label != 0) {
                    var labelValue = layer.label;

                    // If the label color is not in the object, create an array for it
                    if (!layerIndicesByLabel[labelValue]) {
                        layerIndicesByLabel[labelValue] = [];
                    }

                    // Store the layer index in the array for the label color
                    layerIndicesByLabel[labelValue].push(layer.index);
                }
            }

            // Get a reference to the sections folder
            var compsFolder = findOrCreateFolder(app.project.rootFolder, "Comps");
            var sectionsFolder = findOrCreateFolder(compsFolder, "Sections");
            
            // Iterate over each label color and precompose the corresponding layers
            // TODO: Make section groups based on label color difference, rather than by set color difference, so that the same color can be used on mutliple sections
            for (var labelValue in layerIndicesByLabel) {
                if (layerIndicesByLabel.hasOwnProperty(labelValue)) {
                    var layerIndices = layerIndicesByLabel[labelValue];

                    var groupDuration = 0;

                    for (var j = 0; j < layerIndices.length; j++) {
                        var layerIndex = layerIndices[j];
                        var layerToGroup = activeComp.layer(layerIndex);

                        groupDuration += (layerToGroup.outPoint - layerToGroup.inPoint);
                    }

                    var precompStartTime = activeComp.layers[layerIndices[0]].startTime;
                    
                    // Create the new section as a precomp, make sure to run a check to make a unique name
                    var precompName = getSectionName(nameScheme, activeComp.layers[layerIndices[0]].name, activeComp.layers[layerIndices[layerIndices.length-1]].name);
                    var precomp = activeComp.layers.precompose(layerIndices, precompName, true);
                    precomp.label = parseInt(labelValue);
                    precomp.duration = groupDuration + (handleLength*2);
                    precomp.displayStartTime = precompStartTime;

                    // Within the precomp move the layers to the correct times
                    var sectionLayers = precomp.layers;
                    var moveBack = precomp.displayStartTime;

                    for(var i=1; i <= sectionLayers.length; i++) {
                        var sectionLayer = sectionLayers[i];

                        sectionLayer.startTime = (sectionLayer.startTime - moveBack)+handleLength;
                    }

                    // Get the project panel
                    var projectPanel = app.project.items;

                    // Create the section folders
                    var sectionFolder = createSectionFolder(app.project.rootFolder, precompName);
                    precomp.parentFolder = sectionFolder;
                    sectionFolder.parentFolder = sectionsFolder;

                    // Find the assets folder
                    var assetFolder = findOrCreateFolder(sectionFolder, "Assets");
                    var imageFolder = findOrCreateFolder(assetFolder, "Images");

                    // Iterate over all layers in the composition

                    for (var i = 1; i <= precomp.numLayers; i++) {
                        var layer = precomp.layer(i);

                        // Check if the layer source is an image or footage item
                        if (layer.source && layer.source instanceof FootageItem) {
                            // Move the source item into the "Assets/Images" folder
                            var sourceItem = layer.source;
                            sourceItem.parentFolder = imageFolder;
                        }
                    }
                }
            }

            // Move the layers in the active comp
            var currentPlayhead = -handleLength;
            for(var i=activeComp.numLayers; i >= 1; i--) {
                activeComp.layers[i].startTime = currentPlayhead;
                var compDuration = activeComp.layers[i].outPoint - activeComp.layers[i].inPoint;

                currentPlayhead += compDuration-handleLength;
            }

            // Trim comps to handles
            for(var i=activeComp.numLayers; i >= 1; i--) {
                var activeLayer = activeComp.layers[i];
                var compDuration = activeLayer.outPoint - activeLayer.inPoint;
                activeLayer.inPoint = activeLayer.startTime + handleLength;
                activeLayer.outPoint = activeLayer.outPoint - handleLength;
            }

            // Move all layers backwards handleLength
            for (var i = activeComp.numLayers; i >= 1; i--) {
                var layer = activeComp.layer(i);
                var offsetIndex = activeComp.numLayers - i;

                layer.startTime = layer.startTime - (handleLength*offsetIndex);
            }

        } else {
            alert("No active composition.");
        }
        app.endUndoGroup();
    }

// Creates a section folder structure as a child of the passed folder item, returns a reference to the section folder
    function createSectionFolder(parent, name) {
        // Section folder
        var sectionFolder = parent.items.addFolder(name);

        // Create Assets folder
        var assetsFolder = sectionFolder.items.addFolder("Assets");
        assetsFolder.items.addFolder("Audio");
        assetsFolder.items.addFolder("Footage");
        assetsFolder.items.addFolder("Images");
        assetsFolder.items.addFolder("Misc");

        // Create the precomps folder
        var precompsFolder = sectionFolder.items.addFolder("Precomps");

        return sectionFolder;
    }

// Function to find or create a folder by name
    function findOrCreateFolder(parentFolder, folderName) {
        // Search for an existing folder with the specified name
        for (var i = 1; i <= parentFolder.numItems; i++) {
            var item = parentFolder.item(i);
            if (item instanceof FolderItem && item.name === folderName) {
                return item;
            }
        }

        // If the folder doesn't exist, create it
        var newFolder = parentFolder.items.addFolder(folderName);
        return newFolder;
    }

// Function to generate a section name
    function getSectionName(namingScheme, firstLayerName, lastLayerName) {
        var sectionName = "Section";
        switch(namingScheme) {
            case "First Board Name":
            default:
                // First Layer Name
                sectionName = cleanSectionName(firstLayerName);
                break;
            case "First/Last Joined":
                // First/Last Layer Joined Name
                var firstName = cleanSectionName(firstLayerName);
                var lastName = cleanSectionName(lastLayerName);
                sectionName = firstName + "..." + lastName;
                break;
            case "Last Board Name":
                // Last Layer Name
                sectionName = cleanSectionName(lastLayerName);
                break;
        }
        return checkSectionName(sectionName);
    }

// Function to remove unwanted artifacts from section names
    function cleanSectionName(sectionName) {
        // Trim any contents after periods
        return sectionName.split(".")[0];
    }

// Function to check if a section has a unique name, if not, it returns a unique name, else return the name
    function checkSectionName(sectionName) {
        // Get the sections folder
        var compsFolder = findOrCreateFolder(app.project.rootFolder, "Comps");
        var sectionsFolder = findOrCreateFolder(compsFolder, "Sections");

        for(var i=1; i <= sectionsFolder.numItems; i++) {
            if(sectionsFolder.item(i).name === sectionName) {
                sectionName += "_1";
            }
        }

        return sectionName;
    }

// Function to check if the layers are in the order of earliest last, if not, flip their order
    function checkLayerOrder() {
        // Get the active composition
        var activeComp = app.project.activeItem;
        var layerFirstStart = activeComp.layer(1).inPoint;
        var layerLastStart = activeComp.layer(activeComp.numLayers).inPoint;
        if(layerLastStart > layerFirstStart) {
            // The comp has an inverted order, flip the layer order
            // Get the total number of layers in the composition
            var numLayers = activeComp.numLayers;

            // Create an array to store the layer references
            var layerArray = [];

            // Populate the layer array with the layer references
            for (var i = 1; i <= numLayers; i++) {
                var layer = activeComp.layer(i);
                layerArray.push(layer);
            }

            // Reverse the order of the layer array
            layerArray.reverse();

            // Adjust the layer indices to reflect the new order
            for (var j = 0; j < layerArray.length; j++) {
                if(j === 0) {
                    layerArray[0].moveToBeginning();
                } else {
                    layerArray[j].moveAfter(layerArray[j-1])
                }
            }
        }
    }
})(this);