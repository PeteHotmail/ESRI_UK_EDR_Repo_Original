
/** interface for Multidemisnional Parameter used in definition */
interface MultidemisnionalParameter {
    variableName: string;
    dimensionName: string;
    isSlice: boolean;
}


/** a representation of a mosiac rule used in image server */
class MosaicRule {

    mosaicMethod = "esriMosaicNone";
    sortField = "*";
    ascending = true;
    mosaicOperation = "MT_FIRST"
    _multidimensionalDefinition: Array<MultidemisnionalParameter>;

    constructor (multidimensionalDefinition: Array<MultidemisnionalParameter>) {
        this._multidimensionalDefinition = multidimensionalDefinition;
    }

    get multidimensionalDefinition (): Array<MultidemisnionalParameter> {
        return this._multidimensionalDefinition;
    }

    set multidimensionalDefinition (dimension: Array<MultidemisnionalParameter>) {
        this._multidimensionalDefinition = dimension;
    }
}


/** represets a mosaic and is used as a builder */
class Mosaic {

    /**
     * list of parameter names as per EDR spec
     * @param parametername takes EDR parameter names and builds a rule. 
     */
    static createMosaicRule (parametername: string[]): MosaicRule {

        const mdpArray: MultidemisnionalParameter[] = [];
        
        // loop over each parameter name and build into MD parameter object
        for (const name of parametername) {
            const mdp: MultidemisnionalParameter = {
                variableName: "",
                dimensionName: name,
                isSlice: false
            };
            mdpArray.push(mdp);
        }
        const rule = new MosaicRule(mdpArray);
        return rule;
    }
}

export default Mosaic;
export {Mosaic, MosaicRule}; 